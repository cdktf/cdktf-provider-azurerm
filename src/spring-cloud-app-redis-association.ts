// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudAppRedisAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#name SpringCloudAppRedisAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#redis_access_key SpringCloudAppRedisAssociation#redis_access_key}
  */
  readonly redisAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#redis_cache_id SpringCloudAppRedisAssociation#redis_cache_id}
  */
  readonly redisCacheId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#spring_cloud_app_id SpringCloudAppRedisAssociation#spring_cloud_app_id}
  */
  readonly springCloudAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#ssl_enabled SpringCloudAppRedisAssociation#ssl_enabled}
  */
  readonly sslEnabled?: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#timeouts SpringCloudAppRedisAssociation#timeouts}
  */
  readonly timeouts?: SpringCloudAppRedisAssociationTimeouts;
}
export interface SpringCloudAppRedisAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#create SpringCloudAppRedisAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#delete SpringCloudAppRedisAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#read SpringCloudAppRedisAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html#update SpringCloudAppRedisAssociation#update}
  */
  readonly update?: string;
}

function springCloudAppRedisAssociationTimeoutsToTerraform(struct?: SpringCloudAppRedisAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html azurerm_spring_cloud_app_redis_association}
*/
export class SpringCloudAppRedisAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_redis_association.html azurerm_spring_cloud_app_redis_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudAppRedisAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudAppRedisAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_app_redis_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._redisAccessKey = config.redisAccessKey;
    this._redisCacheId = config.redisCacheId;
    this._springCloudAppId = config.springCloudAppId;
    this._sslEnabled = config.sslEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // redis_access_key - computed: false, optional: false, required: true
  private _redisAccessKey: string;
  public get redisAccessKey() {
    return this.getStringAttribute('redis_access_key');
  }
  public set redisAccessKey(value: string) {
    this._redisAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisAccessKeyInput() {
    return this._redisAccessKey
  }

  // redis_cache_id - computed: false, optional: false, required: true
  private _redisCacheId: string;
  public get redisCacheId() {
    return this.getStringAttribute('redis_cache_id');
  }
  public set redisCacheId(value: string) {
    this._redisCacheId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCacheIdInput() {
    return this._redisCacheId
  }

  // spring_cloud_app_id - computed: false, optional: false, required: true
  private _springCloudAppId: string;
  public get springCloudAppId() {
    return this.getStringAttribute('spring_cloud_app_id');
  }
  public set springCloudAppId(value: string) {
    this._springCloudAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudAppIdInput() {
    return this._springCloudAppId
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean;
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean ) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudAppRedisAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpringCloudAppRedisAssociationTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      redis_access_key: cdktf.stringToTerraform(this._redisAccessKey),
      redis_cache_id: cdktf.stringToTerraform(this._redisCacheId),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      timeouts: springCloudAppRedisAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
