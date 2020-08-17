// https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubDpsSharedAccessPolicyConfig extends TerraformMetaArguments {
  readonly enrollmentRead?: boolean;
  readonly enrollmentWrite?: boolean;
  readonly iothubDpsName: string;
  readonly name: string;
  readonly registrationRead?: boolean;
  readonly registrationWrite?: boolean;
  readonly resourceGroupName: string;
  readonly serviceConfig?: boolean;
  /** timeouts block */
  readonly timeouts?: IothubDpsSharedAccessPolicyTimeouts;
}
export interface IothubDpsSharedAccessPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IothubDpsSharedAccessPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubDpsSharedAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_dps_shared_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enrollmentRead = config.enrollmentRead;
    this._enrollmentWrite = config.enrollmentWrite;
    this._iothubDpsName = config.iothubDpsName;
    this._name = config.name;
    this._registrationRead = config.registrationRead;
    this._registrationWrite = config.registrationWrite;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceConfig = config.serviceConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enrollment_read - computed: false, optional: true, required: false
  private _enrollmentRead?: boolean;
  public get enrollmentRead() {
    return this._enrollmentRead;
  }
  public set enrollmentRead(value: boolean | undefined) {
    this._enrollmentRead = value;
  }

  // enrollment_write - computed: false, optional: true, required: false
  private _enrollmentWrite?: boolean;
  public get enrollmentWrite() {
    return this._enrollmentWrite;
  }
  public set enrollmentWrite(value: boolean | undefined) {
    this._enrollmentWrite = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iothub_dps_name - computed: false, optional: false, required: true
  private _iothubDpsName: string;
  public get iothubDpsName() {
    return this._iothubDpsName;
  }
  public set iothubDpsName(value: string) {
    this._iothubDpsName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // primary_connection_string - computed: true, optional: false, required: true
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_key - computed: true, optional: false, required: true
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // registration_read - computed: false, optional: true, required: false
  private _registrationRead?: boolean;
  public get registrationRead() {
    return this._registrationRead;
  }
  public set registrationRead(value: boolean | undefined) {
    this._registrationRead = value;
  }

  // registration_write - computed: false, optional: true, required: false
  private _registrationWrite?: boolean;
  public get registrationWrite() {
    return this._registrationWrite;
  }
  public set registrationWrite(value: boolean | undefined) {
    this._registrationWrite = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_connection_string - computed: true, optional: false, required: true
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_key - computed: true, optional: false, required: true
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig?: boolean;
  public get serviceConfig() {
    return this._serviceConfig;
  }
  public set serviceConfig(value: boolean | undefined) {
    this._serviceConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubDpsSharedAccessPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubDpsSharedAccessPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enrollment_read: this._enrollmentRead,
      enrollment_write: this._enrollmentWrite,
      iothub_dps_name: this._iothubDpsName,
      name: this._name,
      registration_read: this._registrationRead,
      registration_write: this._registrationWrite,
      resource_group_name: this._resourceGroupName,
      service_config: this._serviceConfig,
      timeouts: this._timeouts,
    };
  }
}
