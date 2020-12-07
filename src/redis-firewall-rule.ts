// https://www.terraform.io/docs/providers/azurerm/r/redis_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  readonly endIp: string;
  readonly name: string;
  readonly redisCacheName: string;
  readonly resourceGroupName: string;
  readonly startIp: string;
  /** timeouts block */
  readonly timeouts?: RedisFirewallRuleTimeouts;
}
export interface RedisFirewallRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function redisFirewallRuleTimeoutsToTerraform(struct?: RedisFirewallRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class RedisFirewallRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedisFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endIp = config.endIp;
    this._name = config.name;
    this._redisCacheName = config.redisCacheName;
    this._resourceGroupName = config.resourceGroupName;
    this._startIp = config.startIp;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_ip - computed: false, optional: false, required: true
  private _endIp: string;
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // redis_cache_name - computed: false, optional: false, required: true
  private _redisCacheName: string;
  public get redisCacheName() {
    return this.getStringAttribute('redis_cache_name');
  }
  public set redisCacheName(value: string) {
    this._redisCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCacheNameInput() {
    return this._redisCacheName
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // start_ip - computed: false, optional: false, required: true
  private _startIp: string;
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisFirewallRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RedisFirewallRuleTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_ip: cdktf.stringToTerraform(this._endIp),
      name: cdktf.stringToTerraform(this._name),
      redis_cache_name: cdktf.stringToTerraform(this._redisCacheName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_ip: cdktf.stringToTerraform(this._startIp),
      timeouts: redisFirewallRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
