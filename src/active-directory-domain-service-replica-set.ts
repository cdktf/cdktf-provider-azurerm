// https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainServiceReplicaSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#domain_service_id ActiveDirectoryDomainServiceReplicaSet#domain_service_id}
  */
  readonly domainServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#location ActiveDirectoryDomainServiceReplicaSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#subnet_id ActiveDirectoryDomainServiceReplicaSet#subnet_id}
  */
  readonly subnetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#timeouts ActiveDirectoryDomainServiceReplicaSet#timeouts}
  */
  readonly timeouts?: ActiveDirectoryDomainServiceReplicaSetTimeouts;
}
export interface ActiveDirectoryDomainServiceReplicaSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#create ActiveDirectoryDomainServiceReplicaSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#delete ActiveDirectoryDomainServiceReplicaSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#read ActiveDirectoryDomainServiceReplicaSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#update ActiveDirectoryDomainServiceReplicaSet#update}
  */
  readonly update?: string;
}

function activeDirectoryDomainServiceReplicaSetTimeoutsToTerraform(struct?: ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference | ActiveDirectoryDomainServiceReplicaSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html azurerm_active_directory_domain_service_replica_set}
*/
export class ActiveDirectoryDomainServiceReplicaSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_active_directory_domain_service_replica_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html azurerm_active_directory_domain_service_replica_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryDomainServiceReplicaSetConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryDomainServiceReplicaSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_active_directory_domain_service_replica_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainServiceId = config.domainServiceId;
    this._location = config.location;
    this._subnetId = config.subnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_controller_ip_addresses - computed: true, optional: false, required: false
  public get domainControllerIpAddresses() {
    return this.getListAttribute('domain_controller_ip_addresses');
  }

  // domain_service_id - computed: false, optional: false, required: true
  private _domainServiceId?: string; 
  public get domainServiceId() {
    return this.getStringAttribute('domain_service_id');
  }
  public set domainServiceId(value: string) {
    this._domainServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainServiceIdInput() {
    return this._domainServiceId
  }

  // external_access_ip_address - computed: true, optional: false, required: false
  public get externalAccessIpAddress() {
    return this.getStringAttribute('external_access_ip_address');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // service_status - computed: true, optional: false, required: false
  public get serviceStatus() {
    return this.getStringAttribute('service_status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ActiveDirectoryDomainServiceReplicaSetTimeouts | undefined; 
  private __timeoutsOutput = new ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ActiveDirectoryDomainServiceReplicaSetTimeouts | undefined) {
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
      domain_service_id: cdktf.stringToTerraform(this._domainServiceId),
      location: cdktf.stringToTerraform(this._location),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: activeDirectoryDomainServiceReplicaSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
