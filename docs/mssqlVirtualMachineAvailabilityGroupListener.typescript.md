# `mssqlVirtualMachineAvailabilityGroupListener` Submodule <a name="`mssqlVirtualMachineAvailabilityGroupListener` Submodule" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlVirtualMachineAvailabilityGroupListener <a name="MssqlVirtualMachineAvailabilityGroupListener" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener azurerm_mssql_virtual_machine_availability_group_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener(scope: Construct, id: string, config: MssqlVirtualMachineAvailabilityGroupListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig">MssqlVirtualMachineAvailabilityGroupListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig">MssqlVirtualMachineAvailabilityGroupListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putLoadBalancerConfiguration">putLoadBalancerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putMultiSubnetIpConfiguration">putMultiSubnetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putReplica">putReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetAvailabilityGroupName">resetAvailabilityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetLoadBalancerConfiguration">resetLoadBalancerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetMultiSubnetIpConfiguration">resetMultiSubnetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoadBalancerConfiguration` <a name="putLoadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putLoadBalancerConfiguration"></a>

```typescript
public putLoadBalancerConfiguration(value: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putLoadBalancerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

---

##### `putMultiSubnetIpConfiguration` <a name="putMultiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putMultiSubnetIpConfiguration"></a>

```typescript
public putMultiSubnetIpConfiguration(value: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putMultiSubnetIpConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>[]

---

##### `putReplica` <a name="putReplica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putReplica"></a>

```typescript
public putReplica(value: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerReplica[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putReplica.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlVirtualMachineAvailabilityGroupListenerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

---

##### `resetAvailabilityGroupName` <a name="resetAvailabilityGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetAvailabilityGroupName"></a>

```typescript
public resetAvailabilityGroupName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancerConfiguration` <a name="resetLoadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetLoadBalancerConfiguration"></a>

```typescript
public resetLoadBalancerConfiguration(): void
```

##### `resetMultiSubnetIpConfiguration` <a name="resetMultiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetMultiSubnetIpConfiguration"></a>

```typescript
public resetMultiSubnetIpConfiguration(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlVirtualMachineAvailabilityGroupListener resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isConstruct"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformElement"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformResource"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.generateConfigForImport"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlVirtualMachineAvailabilityGroupListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlVirtualMachineAvailabilityGroupListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlVirtualMachineAvailabilityGroupListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlVirtualMachineAvailabilityGroupListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.loadBalancerConfiguration">loadBalancerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.multiSubnetIpConfiguration">multiSubnetIpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList">MssqlVirtualMachineAvailabilityGroupListenerReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference">MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.availabilityGroupNameInput">availabilityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.loadBalancerConfigurationInput">loadBalancerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.multiSubnetIpConfigurationInput">multiSubnetIpConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.replicaInput">replicaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.sqlVirtualMachineGroupIdInput">sqlVirtualMachineGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.availabilityGroupName">availabilityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.sqlVirtualMachineGroupId">sqlVirtualMachineGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancerConfiguration`<sup>Required</sup> <a name="loadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.loadBalancerConfiguration"></a>

```typescript
public readonly loadBalancerConfiguration: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference</a>

---

##### `multiSubnetIpConfiguration`<sup>Required</sup> <a name="multiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.multiSubnetIpConfiguration"></a>

```typescript
public readonly multiSubnetIpConfiguration: MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList</a>

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.replica"></a>

```typescript
public readonly replica: MssqlVirtualMachineAvailabilityGroupListenerReplicaList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList">MssqlVirtualMachineAvailabilityGroupListenerReplicaList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference">MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference</a>

---

##### `availabilityGroupNameInput`<sup>Optional</sup> <a name="availabilityGroupNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.availabilityGroupNameInput"></a>

```typescript
public readonly availabilityGroupNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerConfigurationInput`<sup>Optional</sup> <a name="loadBalancerConfigurationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.loadBalancerConfigurationInput"></a>

```typescript
public readonly loadBalancerConfigurationInput: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

---

##### `multiSubnetIpConfigurationInput`<sup>Optional</sup> <a name="multiSubnetIpConfigurationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.multiSubnetIpConfigurationInput"></a>

```typescript
public readonly multiSubnetIpConfigurationInput: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `replicaInput`<sup>Optional</sup> <a name="replicaInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.replicaInput"></a>

```typescript
public readonly replicaInput: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerReplica[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>[]

---

##### `sqlVirtualMachineGroupIdInput`<sup>Optional</sup> <a name="sqlVirtualMachineGroupIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.sqlVirtualMachineGroupIdInput"></a>

```typescript
public readonly sqlVirtualMachineGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

---

##### `availabilityGroupName`<sup>Required</sup> <a name="availabilityGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.availabilityGroupName"></a>

```typescript
public readonly availabilityGroupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `sqlVirtualMachineGroupId`<sup>Required</sup> <a name="sqlVirtualMachineGroupId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.sqlVirtualMachineGroupId"></a>

```typescript
public readonly sqlVirtualMachineGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlVirtualMachineAvailabilityGroupListenerConfig <a name="MssqlVirtualMachineAvailabilityGroupListenerConfig" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

const mssqlVirtualMachineAvailabilityGroupListenerConfig: mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#name MssqlVirtualMachineAvailabilityGroupListener#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.replica">replica</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>[]</code> | replica block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.sqlVirtualMachineGroupId">sqlVirtualMachineGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_group_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.availabilityGroupName">availabilityGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#availability_group_name MssqlVirtualMachineAvailabilityGroupListener#availability_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#id MssqlVirtualMachineAvailabilityGroupListener#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.loadBalancerConfiguration">loadBalancerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a></code> | load_balancer_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.multiSubnetIpConfiguration">multiSubnetIpConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>[]</code> | multi_subnet_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#port MssqlVirtualMachineAvailabilityGroupListener#port}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#name MssqlVirtualMachineAvailabilityGroupListener#name}.

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.replica"></a>

```typescript
public readonly replica: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerReplica[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>[]

replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#replica MssqlVirtualMachineAvailabilityGroupListener#replica}

---

##### `sqlVirtualMachineGroupId`<sup>Required</sup> <a name="sqlVirtualMachineGroupId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.sqlVirtualMachineGroupId"></a>

```typescript
public readonly sqlVirtualMachineGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_group_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_group_id}.

---

##### `availabilityGroupName`<sup>Optional</sup> <a name="availabilityGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.availabilityGroupName"></a>

```typescript
public readonly availabilityGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#availability_group_name MssqlVirtualMachineAvailabilityGroupListener#availability_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#id MssqlVirtualMachineAvailabilityGroupListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerConfiguration`<sup>Optional</sup> <a name="loadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.loadBalancerConfiguration"></a>

```typescript
public readonly loadBalancerConfiguration: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

load_balancer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_configuration MssqlVirtualMachineAvailabilityGroupListener#load_balancer_configuration}

---

##### `multiSubnetIpConfiguration`<sup>Optional</sup> <a name="multiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.multiSubnetIpConfiguration"></a>

```typescript
public readonly multiSubnetIpConfiguration: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>[]

multi_subnet_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#multi_subnet_ip_configuration MssqlVirtualMachineAvailabilityGroupListener#multi_subnet_ip_configuration}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#port MssqlVirtualMachineAvailabilityGroupListener#port}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlVirtualMachineAvailabilityGroupListenerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#timeouts MssqlVirtualMachineAvailabilityGroupListener#timeouts}

---

### MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration <a name="MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

const mssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration: mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_id MssqlVirtualMachineAvailabilityGroupListener#load_balancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.probePort">probePort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#probe_port MssqlVirtualMachineAvailabilityGroupListener#probe_port}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.sqlVirtualMachineIds">sqlVirtualMachineIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_ids MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_id MssqlVirtualMachineAvailabilityGroupListener#load_balancer_id}.

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}.

---

##### `probePort`<sup>Required</sup> <a name="probePort" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.probePort"></a>

```typescript
public readonly probePort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#probe_port MssqlVirtualMachineAvailabilityGroupListener#probe_port}.

---

##### `sqlVirtualMachineIds`<sup>Required</sup> <a name="sqlVirtualMachineIds" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.sqlVirtualMachineIds"></a>

```typescript
public readonly sqlVirtualMachineIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_ids MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_ids}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}.

---

### MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration <a name="MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

const mssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration: mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.sqlVirtualMachineId">sqlVirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}. |

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}.

---

##### `sqlVirtualMachineId`<sup>Required</sup> <a name="sqlVirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.sqlVirtualMachineId"></a>

```typescript
public readonly sqlVirtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}.

---

### MssqlVirtualMachineAvailabilityGroupListenerReplica <a name="MssqlVirtualMachineAvailabilityGroupListenerReplica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

const mssqlVirtualMachineAvailabilityGroupListenerReplica: mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.commit">commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#commit MssqlVirtualMachineAvailabilityGroupListener#commit}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.failoverMode">failoverMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#failover_mode MssqlVirtualMachineAvailabilityGroupListener#failover_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.readableSecondary">readableSecondary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#readable_secondary MssqlVirtualMachineAvailabilityGroupListener#readable_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#role MssqlVirtualMachineAvailabilityGroupListener#role}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.sqlVirtualMachineId">sqlVirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}. |

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#commit MssqlVirtualMachineAvailabilityGroupListener#commit}.

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#failover_mode MssqlVirtualMachineAvailabilityGroupListener#failover_mode}.

---

##### `readableSecondary`<sup>Required</sup> <a name="readableSecondary" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.readableSecondary"></a>

```typescript
public readonly readableSecondary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#readable_secondary MssqlVirtualMachineAvailabilityGroupListener#readable_secondary}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#role MssqlVirtualMachineAvailabilityGroupListener#role}.

---

##### `sqlVirtualMachineId`<sup>Required</sup> <a name="sqlVirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.sqlVirtualMachineId"></a>

```typescript
public readonly sqlVirtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}.

---

### MssqlVirtualMachineAvailabilityGroupListenerTimeouts <a name="MssqlVirtualMachineAvailabilityGroupListenerTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

const mssqlVirtualMachineAvailabilityGroupListenerTimeouts: mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#create MssqlVirtualMachineAvailabilityGroupListener#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#delete MssqlVirtualMachineAvailabilityGroupListener#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#read MssqlVirtualMachineAvailabilityGroupListener#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#create MssqlVirtualMachineAvailabilityGroupListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#delete MssqlVirtualMachineAvailabilityGroupListener#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/mssql_virtual_machine_availability_group_listener#read MssqlVirtualMachineAvailabilityGroupListener#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference <a name="MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.probePortInput">probePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.sqlVirtualMachineIdsInput">sqlVirtualMachineIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.probePort">probePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.sqlVirtualMachineIds">sqlVirtualMachineIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `probePortInput`<sup>Optional</sup> <a name="probePortInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.probePortInput"></a>

```typescript
public readonly probePortInput: number;
```

- *Type:* number

---

##### `sqlVirtualMachineIdsInput`<sup>Optional</sup> <a name="sqlVirtualMachineIdsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.sqlVirtualMachineIdsInput"></a>

```typescript
public readonly sqlVirtualMachineIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `probePort`<sup>Required</sup> <a name="probePort" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.probePort"></a>

```typescript
public readonly probePort: number;
```

- *Type:* number

---

##### `sqlVirtualMachineIds`<sup>Required</sup> <a name="sqlVirtualMachineIds" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.sqlVirtualMachineIds"></a>

```typescript
public readonly sqlVirtualMachineIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

---


### MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList <a name="MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.get"></a>

```typescript
public get(index: number): MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>[]

---


### MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference <a name="MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.sqlVirtualMachineIdInput">sqlVirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.sqlVirtualMachineId">sqlVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `sqlVirtualMachineIdInput`<sup>Optional</sup> <a name="sqlVirtualMachineIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.sqlVirtualMachineIdInput"></a>

```typescript
public readonly sqlVirtualMachineIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `sqlVirtualMachineId`<sup>Required</sup> <a name="sqlVirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.sqlVirtualMachineId"></a>

```typescript
public readonly sqlVirtualMachineId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>

---


### MssqlVirtualMachineAvailabilityGroupListenerReplicaList <a name="MssqlVirtualMachineAvailabilityGroupListenerReplicaList" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.get"></a>

```typescript
public get(index: number): MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerReplica[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>[]

---


### MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference <a name="MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.failoverModeInput">failoverModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.readableSecondaryInput">readableSecondaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.sqlVirtualMachineIdInput">sqlVirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.failoverMode">failoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.readableSecondary">readableSecondary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.sqlVirtualMachineId">sqlVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `failoverModeInput`<sup>Optional</sup> <a name="failoverModeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.failoverModeInput"></a>

```typescript
public readonly failoverModeInput: string;
```

- *Type:* string

---

##### `readableSecondaryInput`<sup>Optional</sup> <a name="readableSecondaryInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.readableSecondaryInput"></a>

```typescript
public readonly readableSecondaryInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `sqlVirtualMachineIdInput`<sup>Optional</sup> <a name="sqlVirtualMachineIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.sqlVirtualMachineIdInput"></a>

```typescript
public readonly sqlVirtualMachineIdInput: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

---

##### `readableSecondary`<sup>Required</sup> <a name="readableSecondary" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.readableSecondary"></a>

```typescript
public readonly readableSecondary: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `sqlVirtualMachineId`<sup>Required</sup> <a name="sqlVirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.sqlVirtualMachineId"></a>

```typescript
public readonly sqlVirtualMachineId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerReplica;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>

---


### MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference <a name="MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlVirtualMachineAvailabilityGroupListener } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlVirtualMachineAvailabilityGroupListenerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

---



