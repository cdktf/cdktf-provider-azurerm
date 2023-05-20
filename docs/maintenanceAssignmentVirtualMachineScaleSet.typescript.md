# `azurerm_maintenance_assignment_virtual_machine_scale_set`

Refer to the Terraform Registory for docs: [`azurerm_maintenance_assignment_virtual_machine_scale_set`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set).

# `maintenanceAssignmentVirtualMachineScaleSet` Submodule <a name="`maintenanceAssignmentVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceAssignmentVirtualMachineScaleSet <a name="MaintenanceAssignmentVirtualMachineScaleSet" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set azurerm_maintenance_assignment_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.Initializer"></a>

```typescript
import { maintenanceAssignmentVirtualMachineScaleSet } from '@cdktf/provider-azurerm'

new maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet(scope: Construct, id: string, config: MaintenanceAssignmentVirtualMachineScaleSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig">MaintenanceAssignmentVirtualMachineScaleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig">MaintenanceAssignmentVirtualMachineScaleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.putTimeouts"></a>

```typescript
public putTimeouts(value: MaintenanceAssignmentVirtualMachineScaleSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts">MaintenanceAssignmentVirtualMachineScaleSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isConstruct"></a>

```typescript
import { maintenanceAssignmentVirtualMachineScaleSet } from '@cdktf/provider-azurerm'

maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isTerraformElement"></a>

```typescript
import { maintenanceAssignmentVirtualMachineScaleSet } from '@cdktf/provider-azurerm'

maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isTerraformResource"></a>

```typescript
import { maintenanceAssignmentVirtualMachineScaleSet } from '@cdktf/provider-azurerm'

maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference">MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.maintenanceConfigurationIdInput">maintenanceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts">MaintenanceAssignmentVirtualMachineScaleSetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.virtualMachineScaleSetIdInput">virtualMachineScaleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.maintenanceConfigurationId">maintenanceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.timeouts"></a>

```typescript
public readonly timeouts: MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference">MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceConfigurationIdInput`<sup>Optional</sup> <a name="maintenanceConfigurationIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.maintenanceConfigurationIdInput"></a>

```typescript
public readonly maintenanceConfigurationIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MaintenanceAssignmentVirtualMachineScaleSetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts">MaintenanceAssignmentVirtualMachineScaleSetTimeouts</a> | cdktf.IResolvable

---

##### `virtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="virtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.virtualMachineScaleSetIdInput"></a>

```typescript
public readonly virtualMachineScaleSetIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maintenanceConfigurationId`<sup>Required</sup> <a name="maintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.maintenanceConfigurationId"></a>

```typescript
public readonly maintenanceConfigurationId: string;
```

- *Type:* string

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.virtualMachineScaleSetId"></a>

```typescript
public readonly virtualMachineScaleSetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceAssignmentVirtualMachineScaleSetConfig <a name="MaintenanceAssignmentVirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.Initializer"></a>

```typescript
import { maintenanceAssignmentVirtualMachineScaleSet } from '@cdktf/provider-azurerm'

const maintenanceAssignmentVirtualMachineScaleSetConfig: maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#location MaintenanceAssignmentVirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.maintenanceConfigurationId">maintenanceConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#maintenance_configuration_id MaintenanceAssignmentVirtualMachineScaleSet#maintenance_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#virtual_machine_scale_set_id MaintenanceAssignmentVirtualMachineScaleSet#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#id MaintenanceAssignmentVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts">MaintenanceAssignmentVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#location MaintenanceAssignmentVirtualMachineScaleSet#location}.

---

##### `maintenanceConfigurationId`<sup>Required</sup> <a name="maintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.maintenanceConfigurationId"></a>

```typescript
public readonly maintenanceConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#maintenance_configuration_id MaintenanceAssignmentVirtualMachineScaleSet#maintenance_configuration_id}.

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.virtualMachineScaleSetId"></a>

```typescript
public readonly virtualMachineScaleSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#virtual_machine_scale_set_id MaintenanceAssignmentVirtualMachineScaleSet#virtual_machine_scale_set_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#id MaintenanceAssignmentVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MaintenanceAssignmentVirtualMachineScaleSetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts">MaintenanceAssignmentVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#timeouts MaintenanceAssignmentVirtualMachineScaleSet#timeouts}

---

### MaintenanceAssignmentVirtualMachineScaleSetTimeouts <a name="MaintenanceAssignmentVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts.Initializer"></a>

```typescript
import { maintenanceAssignmentVirtualMachineScaleSet } from '@cdktf/provider-azurerm'

const maintenanceAssignmentVirtualMachineScaleSetTimeouts: maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#create MaintenanceAssignmentVirtualMachineScaleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#delete MaintenanceAssignmentVirtualMachineScaleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#read MaintenanceAssignmentVirtualMachineScaleSet#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#create MaintenanceAssignmentVirtualMachineScaleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#delete MaintenanceAssignmentVirtualMachineScaleSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/maintenance_assignment_virtual_machine_scale_set#read MaintenanceAssignmentVirtualMachineScaleSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference <a name="MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { maintenanceAssignmentVirtualMachineScaleSet } from '@cdktf/provider-azurerm'

new maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts">MaintenanceAssignmentVirtualMachineScaleSetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MaintenanceAssignmentVirtualMachineScaleSetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentVirtualMachineScaleSet.MaintenanceAssignmentVirtualMachineScaleSetTimeouts">MaintenanceAssignmentVirtualMachineScaleSetTimeouts</a> | cdktf.IResolvable

---



