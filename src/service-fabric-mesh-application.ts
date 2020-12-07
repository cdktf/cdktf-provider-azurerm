// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricMeshApplicationConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** service block */
  readonly service: ServiceFabricMeshApplicationService[];
  /** timeouts block */
  readonly timeouts?: ServiceFabricMeshApplicationTimeouts;
}
export interface ServiceFabricMeshApplicationServiceCodePackageResourcesLimits {
  readonly cpu: number;
  readonly memory: number;
}

function serviceFabricMeshApplicationServiceCodePackageResourcesLimitsToTerraform(struct?: ServiceFabricMeshApplicationServiceCodePackageResourcesLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}

export interface ServiceFabricMeshApplicationServiceCodePackageResourcesRequests {
  readonly cpu: number;
  readonly memory: number;
}

function serviceFabricMeshApplicationServiceCodePackageResourcesRequestsToTerraform(struct?: ServiceFabricMeshApplicationServiceCodePackageResourcesRequests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}

export interface ServiceFabricMeshApplicationServiceCodePackageResources {
  /** limits block */
  readonly limits?: ServiceFabricMeshApplicationServiceCodePackageResourcesLimits[];
  /** requests block */
  readonly requests: ServiceFabricMeshApplicationServiceCodePackageResourcesRequests[];
}

function serviceFabricMeshApplicationServiceCodePackageResourcesToTerraform(struct?: ServiceFabricMeshApplicationServiceCodePackageResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.listMapper(serviceFabricMeshApplicationServiceCodePackageResourcesLimitsToTerraform)(struct!.limits),
    requests: cdktf.listMapper(serviceFabricMeshApplicationServiceCodePackageResourcesRequestsToTerraform)(struct!.requests),
  }
}

export interface ServiceFabricMeshApplicationServiceCodePackage {
  readonly imageName: string;
  readonly name: string;
  /** resources block */
  readonly resources: ServiceFabricMeshApplicationServiceCodePackageResources[];
}

function serviceFabricMeshApplicationServiceCodePackageToTerraform(struct?: ServiceFabricMeshApplicationServiceCodePackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_name: cdktf.stringToTerraform(struct!.imageName),
    name: cdktf.stringToTerraform(struct!.name),
    resources: cdktf.listMapper(serviceFabricMeshApplicationServiceCodePackageResourcesToTerraform)(struct!.resources),
  }
}

export interface ServiceFabricMeshApplicationService {
  readonly name: string;
  readonly osType: string;
  /** code_package block */
  readonly codePackage: ServiceFabricMeshApplicationServiceCodePackage[];
}

function serviceFabricMeshApplicationServiceToTerraform(struct?: ServiceFabricMeshApplicationService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    code_package: cdktf.listMapper(serviceFabricMeshApplicationServiceCodePackageToTerraform)(struct!.codePackage),
  }
}

export interface ServiceFabricMeshApplicationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function serviceFabricMeshApplicationTimeoutsToTerraform(struct?: ServiceFabricMeshApplicationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ServiceFabricMeshApplication extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceFabricMeshApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_service_fabric_mesh_application',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._service = config.service;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // service - computed: false, optional: false, required: true
  private _service: ServiceFabricMeshApplicationService[];
  public get service() {
    return this.interpolationForAttribute('service') as any;
  }
  public set service(value: ServiceFabricMeshApplicationService[]) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceFabricMeshApplicationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServiceFabricMeshApplicationTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      service: cdktf.listMapper(serviceFabricMeshApplicationServiceToTerraform)(this._service),
      timeouts: serviceFabricMeshApplicationTimeoutsToTerraform(this._timeouts),
    };
  }
}
