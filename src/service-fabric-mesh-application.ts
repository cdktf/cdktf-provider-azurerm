// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricMeshApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#location ServiceFabricMeshApplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#name ServiceFabricMeshApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#resource_group_name ServiceFabricMeshApplication#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#tags ServiceFabricMeshApplication#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#service ServiceFabricMeshApplication#service}
  */
  readonly service: ServiceFabricMeshApplicationService[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#timeouts ServiceFabricMeshApplication#timeouts}
  */
  readonly timeouts?: ServiceFabricMeshApplicationTimeouts;
}
export interface ServiceFabricMeshApplicationServiceCodePackageResourcesLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#cpu ServiceFabricMeshApplication#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#memory ServiceFabricMeshApplication#memory}
  */
  readonly memory: number;
}

export function serviceFabricMeshApplicationServiceCodePackageResourcesLimitsToTerraform(struct?: ServiceFabricMeshApplicationServiceCodePackageResourcesLimitsOutputReference | ServiceFabricMeshApplicationServiceCodePackageResourcesLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}

export class ServiceFabricMeshApplicationServiceCodePackageResourcesLimitsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricMeshApplicationServiceCodePackageResourcesLimits | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cpu) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricMeshApplicationServiceCodePackageResourcesLimits | undefined) {
    if (value === undefined) {
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface ServiceFabricMeshApplicationServiceCodePackageResourcesRequests {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#cpu ServiceFabricMeshApplication#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#memory ServiceFabricMeshApplication#memory}
  */
  readonly memory: number;
}

export function serviceFabricMeshApplicationServiceCodePackageResourcesRequestsToTerraform(struct?: ServiceFabricMeshApplicationServiceCodePackageResourcesRequestsOutputReference | ServiceFabricMeshApplicationServiceCodePackageResourcesRequests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}

export class ServiceFabricMeshApplicationServiceCodePackageResourcesRequestsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricMeshApplicationServiceCodePackageResourcesRequests | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cpu) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricMeshApplicationServiceCodePackageResourcesRequests | undefined) {
    if (value === undefined) {
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface ServiceFabricMeshApplicationServiceCodePackageResources {
  /**
  * limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#limits ServiceFabricMeshApplication#limits}
  */
  readonly limits?: ServiceFabricMeshApplicationServiceCodePackageResourcesLimits;
  /**
  * requests block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#requests ServiceFabricMeshApplication#requests}
  */
  readonly requests: ServiceFabricMeshApplicationServiceCodePackageResourcesRequests;
}

export function serviceFabricMeshApplicationServiceCodePackageResourcesToTerraform(struct?: ServiceFabricMeshApplicationServiceCodePackageResourcesOutputReference | ServiceFabricMeshApplicationServiceCodePackageResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: serviceFabricMeshApplicationServiceCodePackageResourcesLimitsToTerraform(struct!.limits),
    requests: serviceFabricMeshApplicationServiceCodePackageResourcesRequestsToTerraform(struct!.requests),
  }
}

export class ServiceFabricMeshApplicationServiceCodePackageResourcesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricMeshApplicationServiceCodePackageResources | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._limits) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricMeshApplicationServiceCodePackageResources | undefined) {
    if (value === undefined) {
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else {
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new ServiceFabricMeshApplicationServiceCodePackageResourcesLimitsOutputReference(this as any, "limits", true);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: ServiceFabricMeshApplicationServiceCodePackageResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: false, required: true
  private _requests = new ServiceFabricMeshApplicationServiceCodePackageResourcesRequestsOutputReference(this as any, "requests", true);
  public get requests() {
    return this._requests;
  }
  public putRequests(value: ServiceFabricMeshApplicationServiceCodePackageResourcesRequests) {
    this._requests.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface ServiceFabricMeshApplicationServiceCodePackage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#image_name ServiceFabricMeshApplication#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#name ServiceFabricMeshApplication#name}
  */
  readonly name: string;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#resources ServiceFabricMeshApplication#resources}
  */
  readonly resources: ServiceFabricMeshApplicationServiceCodePackageResources;
}

export function serviceFabricMeshApplicationServiceCodePackageToTerraform(struct?: ServiceFabricMeshApplicationServiceCodePackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_name: cdktf.stringToTerraform(struct!.imageName),
    name: cdktf.stringToTerraform(struct!.name),
    resources: serviceFabricMeshApplicationServiceCodePackageResourcesToTerraform(struct!.resources),
  }
}

export interface ServiceFabricMeshApplicationService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#name ServiceFabricMeshApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#os_type ServiceFabricMeshApplication#os_type}
  */
  readonly osType: string;
  /**
  * code_package block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#code_package ServiceFabricMeshApplication#code_package}
  */
  readonly codePackage: ServiceFabricMeshApplicationServiceCodePackage[];
}

export function serviceFabricMeshApplicationServiceToTerraform(struct?: ServiceFabricMeshApplicationService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    code_package: cdktf.listMapper(serviceFabricMeshApplicationServiceCodePackageToTerraform)(struct!.codePackage),
  }
}

export interface ServiceFabricMeshApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#create ServiceFabricMeshApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#delete ServiceFabricMeshApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#read ServiceFabricMeshApplication#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html#update ServiceFabricMeshApplication#update}
  */
  readonly update?: string;
}

export function serviceFabricMeshApplicationTimeoutsToTerraform(struct?: ServiceFabricMeshApplicationTimeoutsOutputReference | ServiceFabricMeshApplicationTimeouts): any {
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

export class ServiceFabricMeshApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricMeshApplicationTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricMeshApplicationTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html azurerm_service_fabric_mesh_application}
*/
export class ServiceFabricMeshApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_service_fabric_mesh_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_application.html azurerm_service_fabric_mesh_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFabricMeshApplicationConfig
  */
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // service - computed: false, optional: false, required: true
  private _service?: ServiceFabricMeshApplicationService[]; 
  public get service() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service') as any;
  }
  public set service(value: ServiceFabricMeshApplicationService[]) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceFabricMeshApplicationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceFabricMeshApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      timeouts: serviceFabricMeshApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
