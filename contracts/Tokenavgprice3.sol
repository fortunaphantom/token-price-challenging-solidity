// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";

contract Tokenavgprice3 is Initializable, ContextUpgradeable {
    uint256[] private dates;
    mapping(uint256 => uint256) private prices;

    function setPrice(uint256 price) external {
        dates.push(block.timestamp);
        prices[block.timestamp] = price;
    }

    function getPrice(uint256 starttime) external view returns (uint256) {
        uint i;
        for (i = 0; i < dates.length; i++) {
            if (starttime <= dates[i] && dates[i] < starttime + 86400) {
                break;
            }
        }

        if (i == dates.length) {
            return 0;
        }

        return prices[dates[i]];
    }

    function getAvgPrice(uint256 starttime, uint256 endtime) external view returns (uint256) {
        uint i = 0;
        uint sum = 0;
        uint count = 0;
        for (i = 0; i < dates.length; i++) {
            if (starttime <= dates[i] && dates[i] <= endtime) {
                sum += prices[dates[i]];
                count++;
            }
        }

        return count > 0 ? (sum / count) : 0;
    }
}
