# `batchPool` Submodule <a name="`batchPool` Submodule" id="@cdktf/provider-azurerm.batchPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchPool <a name="BatchPool" id="@cdktf/provider-azurerm.batchPool.BatchPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool azurerm_batch_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPool(scope: Construct, id: string, config: BatchPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig">BatchPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig">BatchPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale">putAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks">putDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption">putDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale">putFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putMount">putMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement">putNodePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask">putStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference">putStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy">putTaskSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts">putUserAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putWindows">putWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetAutoScale">resetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDataDisks">resetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetExtensions">resetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetFixedScale">resetFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetInterNodeCommunication">resetInterNodeCommunication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMaxTasksPerNode">resetMaxTasksPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetNodePlacement">resetNodePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetOsDiskPlacement">resetOsDiskPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetStartTask">resetStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetStopPendingResizeOperation">resetStopPendingResizeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTargetNodeCommunicationMode">resetTargetNodeCommunicationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTaskSchedulingPolicy">resetTaskSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetUserAccounts">resetUserAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetWindows">resetWindows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.batchPool.BatchPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.batchPool.BatchPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.batchPool.BatchPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoScale` <a name="putAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale"></a>

```typescript
public putAutoScale(value: BatchPoolAutoScale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate"></a>

```typescript
public putCertificate(value: IResolvable | BatchPoolCertificate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>[]

---

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration"></a>

```typescript
public putContainerConfiguration(value: BatchPoolContainerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---

##### `putDataDisks` <a name="putDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks"></a>

```typescript
public putDataDisks(value: IResolvable | BatchPoolDataDisks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>[]

---

##### `putDiskEncryption` <a name="putDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption"></a>

```typescript
public putDiskEncryption(value: IResolvable | BatchPoolDiskEncryption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>[]

---

##### `putExtensions` <a name="putExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions"></a>

```typescript
public putExtensions(value: IResolvable | BatchPoolExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>[]

---

##### `putFixedScale` <a name="putFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale"></a>

```typescript
public putFixedScale(value: BatchPoolFixedScale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity"></a>

```typescript
public putIdentity(value: BatchPoolIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---

##### `putMount` <a name="putMount" id="@cdktf/provider-azurerm.batchPool.BatchPool.putMount"></a>

```typescript
public putMount(value: IResolvable | BatchPoolMount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putMount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: BatchPoolNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---

##### `putNodePlacement` <a name="putNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement"></a>

```typescript
public putNodePlacement(value: IResolvable | BatchPoolNodePlacement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>[]

---

##### `putStartTask` <a name="putStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask"></a>

```typescript
public putStartTask(value: BatchPoolStartTask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---

##### `putStorageImageReference` <a name="putStorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference"></a>

```typescript
public putStorageImageReference(value: BatchPoolStorageImageReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---

##### `putTaskSchedulingPolicy` <a name="putTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy"></a>

```typescript
public putTaskSchedulingPolicy(value: IResolvable | BatchPoolTaskSchedulingPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts"></a>

```typescript
public putTimeouts(value: BatchPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

---

##### `putUserAccounts` <a name="putUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts"></a>

```typescript
public putUserAccounts(value: IResolvable | BatchPoolUserAccounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>[]

---

##### `putWindows` <a name="putWindows" id="@cdktf/provider-azurerm.batchPool.BatchPool.putWindows"></a>

```typescript
public putWindows(value: IResolvable | BatchPoolWindows[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putWindows.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>[]

---

##### `resetAutoScale` <a name="resetAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetAutoScale"></a>

```typescript
public resetAutoScale(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetContainerConfiguration"></a>

```typescript
public resetContainerConfiguration(): void
```

##### `resetDataDisks` <a name="resetDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDataDisks"></a>

```typescript
public resetDataDisks(): void
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExtensions` <a name="resetExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetExtensions"></a>

```typescript
public resetExtensions(): void
```

##### `resetFixedScale` <a name="resetFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetFixedScale"></a>

```typescript
public resetFixedScale(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetInterNodeCommunication` <a name="resetInterNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetInterNodeCommunication"></a>

```typescript
public resetInterNodeCommunication(): void
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetLicenseType"></a>

```typescript
public resetLicenseType(): void
```

##### `resetMaxTasksPerNode` <a name="resetMaxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMaxTasksPerNode"></a>

```typescript
public resetMaxTasksPerNode(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMount` <a name="resetMount" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMount"></a>

```typescript
public resetMount(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetNodePlacement` <a name="resetNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetNodePlacement"></a>

```typescript
public resetNodePlacement(): void
```

##### `resetOsDiskPlacement` <a name="resetOsDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetOsDiskPlacement"></a>

```typescript
public resetOsDiskPlacement(): void
```

##### `resetStartTask` <a name="resetStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetStartTask"></a>

```typescript
public resetStartTask(): void
```

##### `resetStopPendingResizeOperation` <a name="resetStopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetStopPendingResizeOperation"></a>

```typescript
public resetStopPendingResizeOperation(): void
```

##### `resetTargetNodeCommunicationMode` <a name="resetTargetNodeCommunicationMode" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTargetNodeCommunicationMode"></a>

```typescript
public resetTargetNodeCommunicationMode(): void
```

##### `resetTaskSchedulingPolicy` <a name="resetTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTaskSchedulingPolicy"></a>

```typescript
public resetTaskSchedulingPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserAccounts` <a name="resetUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetUserAccounts"></a>

```typescript
public resetUserAccounts(): void
```

##### `resetWindows` <a name="resetWindows" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetWindows"></a>

```typescript
public resetWindows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BatchPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

batchPool.BatchPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

batchPool.BatchPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

batchPool.BatchPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

batchPool.BatchPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BatchPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BatchPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScale">autoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference">BatchPoolAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList">BatchPoolCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference">BatchPoolContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList">BatchPoolDataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryption">diskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList">BatchPoolDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList">BatchPoolExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScale">fixedScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference">BatchPoolFixedScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference">BatchPoolIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.mount">mount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList">BatchPoolMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference">BatchPoolNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacement">nodePlacement</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList">BatchPoolNodePlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.startTask">startTask</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference">BatchPoolStartTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReference">storageImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference">BatchPoolStorageImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicy">taskSchedulingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList">BatchPoolTaskSchedulingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference">BatchPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccounts">userAccounts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList">BatchPoolUserAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList">BatchPoolWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScaleInput">autoScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.certificateInput">certificateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisksInput">dataDisksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.extensionsInput">extensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScaleInput">fixedScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunicationInput">interNodeCommunicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNodeInput">maxTasksPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.mountInput">mountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuIdInput">nodeAgentSkuIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacementInput">nodePlacementInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacementInput">osDiskPlacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.startTaskInput">startTaskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperationInput">stopPendingResizeOperationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReferenceInput">storageImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationModeInput">targetNodeCommunicationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicyInput">taskSchedulingPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccountsInput">userAccountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.windowsInput">windowsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunication">interNodeCommunication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNode">maxTasksPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuId">nodeAgentSkuId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacement">osDiskPlacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperation">stopPendingResizeOperation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationMode">targetNodeCommunicationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoScale`<sup>Required</sup> <a name="autoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScale"></a>

```typescript
public readonly autoScale: BatchPoolAutoScaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference">BatchPoolAutoScaleOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.certificate"></a>

```typescript
public readonly certificate: BatchPoolCertificateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList">BatchPoolCertificateList</a>

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfiguration"></a>

```typescript
public readonly containerConfiguration: BatchPoolContainerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference">BatchPoolContainerConfigurationOutputReference</a>

---

##### `dataDisks`<sup>Required</sup> <a name="dataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisks"></a>

```typescript
public readonly dataDisks: BatchPoolDataDisksList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList">BatchPoolDataDisksList</a>

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: BatchPoolDiskEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList">BatchPoolDiskEncryptionList</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.extensions"></a>

```typescript
public readonly extensions: BatchPoolExtensionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList">BatchPoolExtensionsList</a>

---

##### `fixedScale`<sup>Required</sup> <a name="fixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScale"></a>

```typescript
public readonly fixedScale: BatchPoolFixedScaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference">BatchPoolFixedScaleOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.identity"></a>

```typescript
public readonly identity: BatchPoolIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference">BatchPoolIdentityOutputReference</a>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.mount"></a>

```typescript
public readonly mount: BatchPoolMountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList">BatchPoolMountList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BatchPoolNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference">BatchPoolNetworkConfigurationOutputReference</a>

---

##### `nodePlacement`<sup>Required</sup> <a name="nodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacement"></a>

```typescript
public readonly nodePlacement: BatchPoolNodePlacementList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList">BatchPoolNodePlacementList</a>

---

##### `startTask`<sup>Required</sup> <a name="startTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.startTask"></a>

```typescript
public readonly startTask: BatchPoolStartTaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference">BatchPoolStartTaskOutputReference</a>

---

##### `storageImageReference`<sup>Required</sup> <a name="storageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReference"></a>

```typescript
public readonly storageImageReference: BatchPoolStorageImageReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference">BatchPoolStorageImageReferenceOutputReference</a>

---

##### `taskSchedulingPolicy`<sup>Required</sup> <a name="taskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicy"></a>

```typescript
public readonly taskSchedulingPolicy: BatchPoolTaskSchedulingPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList">BatchPoolTaskSchedulingPolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.timeouts"></a>

```typescript
public readonly timeouts: BatchPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference">BatchPoolTimeoutsOutputReference</a>

---

##### `userAccounts`<sup>Required</sup> <a name="userAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccounts"></a>

```typescript
public readonly userAccounts: BatchPoolUserAccountsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList">BatchPoolUserAccountsList</a>

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.windows"></a>

```typescript
public readonly windows: BatchPoolWindowsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList">BatchPoolWindowsList</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `autoScaleInput`<sup>Optional</sup> <a name="autoScaleInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScaleInput"></a>

```typescript
public readonly autoScaleInput: BatchPoolAutoScale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.certificateInput"></a>

```typescript
public readonly certificateInput: IResolvable | BatchPoolCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>[]

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfigurationInput"></a>

```typescript
public readonly containerConfigurationInput: BatchPoolContainerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---

##### `dataDisksInput`<sup>Optional</sup> <a name="dataDisksInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisksInput"></a>

```typescript
public readonly dataDisksInput: IResolvable | BatchPoolDataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>[]

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: IResolvable | BatchPoolDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.extensionsInput"></a>

```typescript
public readonly extensionsInput: IResolvable | BatchPoolExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>[]

---

##### `fixedScaleInput`<sup>Optional</sup> <a name="fixedScaleInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScaleInput"></a>

```typescript
public readonly fixedScaleInput: BatchPoolFixedScale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.identityInput"></a>

```typescript
public readonly identityInput: BatchPoolIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interNodeCommunicationInput`<sup>Optional</sup> <a name="interNodeCommunicationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunicationInput"></a>

```typescript
public readonly interNodeCommunicationInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `maxTasksPerNodeInput`<sup>Optional</sup> <a name="maxTasksPerNodeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNodeInput"></a>

```typescript
public readonly maxTasksPerNodeInput: number;
```

- *Type:* number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.mountInput"></a>

```typescript
public readonly mountInput: IResolvable | BatchPoolMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: BatchPoolNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---

##### `nodeAgentSkuIdInput`<sup>Optional</sup> <a name="nodeAgentSkuIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuIdInput"></a>

```typescript
public readonly nodeAgentSkuIdInput: string;
```

- *Type:* string

---

##### `nodePlacementInput`<sup>Optional</sup> <a name="nodePlacementInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacementInput"></a>

```typescript
public readonly nodePlacementInput: IResolvable | BatchPoolNodePlacement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>[]

---

##### `osDiskPlacementInput`<sup>Optional</sup> <a name="osDiskPlacementInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacementInput"></a>

```typescript
public readonly osDiskPlacementInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `startTaskInput`<sup>Optional</sup> <a name="startTaskInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.startTaskInput"></a>

```typescript
public readonly startTaskInput: BatchPoolStartTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---

##### `stopPendingResizeOperationInput`<sup>Optional</sup> <a name="stopPendingResizeOperationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperationInput"></a>

```typescript
public readonly stopPendingResizeOperationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageImageReferenceInput`<sup>Optional</sup> <a name="storageImageReferenceInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReferenceInput"></a>

```typescript
public readonly storageImageReferenceInput: BatchPoolStorageImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---

##### `targetNodeCommunicationModeInput`<sup>Optional</sup> <a name="targetNodeCommunicationModeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationModeInput"></a>

```typescript
public readonly targetNodeCommunicationModeInput: string;
```

- *Type:* string

---

##### `taskSchedulingPolicyInput`<sup>Optional</sup> <a name="taskSchedulingPolicyInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicyInput"></a>

```typescript
public readonly taskSchedulingPolicyInput: IResolvable | BatchPoolTaskSchedulingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BatchPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

---

##### `userAccountsInput`<sup>Optional</sup> <a name="userAccountsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccountsInput"></a>

```typescript
public readonly userAccountsInput: IResolvable | BatchPoolUserAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>[]

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `windowsInput`<sup>Optional</sup> <a name="windowsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.windowsInput"></a>

```typescript
public readonly windowsInput: IResolvable | BatchPoolWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interNodeCommunication`<sup>Required</sup> <a name="interNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunication"></a>

```typescript
public readonly interNodeCommunication: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `maxTasksPerNode`<sup>Required</sup> <a name="maxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNode"></a>

```typescript
public readonly maxTasksPerNode: number;
```

- *Type:* number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeAgentSkuId`<sup>Required</sup> <a name="nodeAgentSkuId" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuId"></a>

```typescript
public readonly nodeAgentSkuId: string;
```

- *Type:* string

---

##### `osDiskPlacement`<sup>Required</sup> <a name="osDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacement"></a>

```typescript
public readonly osDiskPlacement: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `stopPendingResizeOperation`<sup>Required</sup> <a name="stopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperation"></a>

```typescript
public readonly stopPendingResizeOperation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetNodeCommunicationMode`<sup>Required</sup> <a name="targetNodeCommunicationMode" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationMode"></a>

```typescript
public readonly targetNodeCommunicationMode: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchPoolAutoScale <a name="BatchPoolAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolAutoScale: batchPool.BatchPoolAutoScale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.formula">formula</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#formula BatchPool#formula}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.evaluationInterval">evaluationInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}. |

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.formula"></a>

```typescript
public readonly formula: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#formula BatchPool#formula}.

---

##### `evaluationInterval`<sup>Optional</sup> <a name="evaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.evaluationInterval"></a>

```typescript
public readonly evaluationInterval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}.

---

### BatchPoolCertificate <a name="BatchPoolCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolCertificate: batchPool.BatchPoolCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeLocation">storeLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#store_location BatchPool#store_location}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeName">storeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#store_name BatchPool#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.visibility">visibility</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#visibility BatchPool#visibility}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storeLocation`<sup>Required</sup> <a name="storeLocation" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeLocation"></a>

```typescript
public readonly storeLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#store_location BatchPool#store_location}.

---

##### `storeName`<sup>Optional</sup> <a name="storeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeName"></a>

```typescript
public readonly storeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#store_name BatchPool#store_name}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.visibility"></a>

```typescript
public readonly visibility: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#visibility BatchPool#visibility}.

---

### BatchPoolConfig <a name="BatchPoolConfig" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolConfig: batchPool.BatchPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodeAgentSkuId">nodeAgentSkuId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.storageImageReference">storageImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.autoScale">autoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.certificate">certificate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>[]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dataDisks">dataDisks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>[]</code> | data_disks block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.diskEncryption">diskEncryption</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>[]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#display_name BatchPool#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.extensions">extensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>[]</code> | extensions block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.fixedScale">fixedScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | fixed_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.interNodeCommunication">interNodeCommunication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#license_type BatchPool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.maxTasksPerNode">maxTasksPerNode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#metadata BatchPool#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.mount">mount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>[]</code> | mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodePlacement">nodePlacement</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>[]</code> | node_placement block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.osDiskPlacement">osDiskPlacement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.startTask">startTask</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | start_task block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.stopPendingResizeOperation">stopPendingResizeOperation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.targetNodeCommunicationMode">targetNodeCommunicationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.taskSchedulingPolicy">taskSchedulingPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>[]</code> | task_scheduling_policy block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.userAccounts">userAccounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>[]</code> | user_accounts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.windows">windows</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>[]</code> | windows block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `nodeAgentSkuId`<sup>Required</sup> <a name="nodeAgentSkuId" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodeAgentSkuId"></a>

```typescript
public readonly nodeAgentSkuId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}.

---

##### `storageImageReference`<sup>Required</sup> <a name="storageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.storageImageReference"></a>

```typescript
public readonly storageImageReference: BatchPoolStorageImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#storage_image_reference BatchPool#storage_image_reference}

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}.

---

##### `autoScale`<sup>Optional</sup> <a name="autoScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.autoScale"></a>

```typescript
public readonly autoScale: BatchPoolAutoScale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#auto_scale BatchPool#auto_scale}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.certificate"></a>

```typescript
public readonly certificate: IResolvable | BatchPoolCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>[]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#certificate BatchPool#certificate}

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.containerConfiguration"></a>

```typescript
public readonly containerConfiguration: BatchPoolContainerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#container_configuration BatchPool#container_configuration}

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dataDisks"></a>

```typescript
public readonly dataDisks: IResolvable | BatchPoolDataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>[]

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#data_disks BatchPool#data_disks}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: IResolvable | BatchPoolDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>[]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#disk_encryption BatchPool#disk_encryption}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#display_name BatchPool#display_name}.

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.extensions"></a>

```typescript
public readonly extensions: IResolvable | BatchPoolExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>[]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#extensions BatchPool#extensions}

---

##### `fixedScale`<sup>Optional</sup> <a name="fixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.fixedScale"></a>

```typescript
public readonly fixedScale: BatchPoolFixedScale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

fixed_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#fixed_scale BatchPool#fixed_scale}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.identity"></a>

```typescript
public readonly identity: BatchPoolIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#identity BatchPool#identity}

---

##### `interNodeCommunication`<sup>Optional</sup> <a name="interNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.interNodeCommunication"></a>

```typescript
public readonly interNodeCommunication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#license_type BatchPool#license_type}.

---

##### `maxTasksPerNode`<sup>Optional</sup> <a name="maxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.maxTasksPerNode"></a>

```typescript
public readonly maxTasksPerNode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#metadata BatchPool#metadata}.

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.mount"></a>

```typescript
public readonly mount: IResolvable | BatchPoolMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>[]

mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#mount BatchPool#mount}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BatchPoolNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#network_configuration BatchPool#network_configuration}

---

##### `nodePlacement`<sup>Optional</sup> <a name="nodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodePlacement"></a>

```typescript
public readonly nodePlacement: IResolvable | BatchPoolNodePlacement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>[]

node_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#node_placement BatchPool#node_placement}

---

##### `osDiskPlacement`<sup>Optional</sup> <a name="osDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.osDiskPlacement"></a>

```typescript
public readonly osDiskPlacement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}.

---

##### `startTask`<sup>Optional</sup> <a name="startTask" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.startTask"></a>

```typescript
public readonly startTask: BatchPoolStartTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

start_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#start_task BatchPool#start_task}

---

##### `stopPendingResizeOperation`<sup>Optional</sup> <a name="stopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.stopPendingResizeOperation"></a>

```typescript
public readonly stopPendingResizeOperation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}.

---

##### `targetNodeCommunicationMode`<sup>Optional</sup> <a name="targetNodeCommunicationMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.targetNodeCommunicationMode"></a>

```typescript
public readonly targetNodeCommunicationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}.

---

##### `taskSchedulingPolicy`<sup>Optional</sup> <a name="taskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.taskSchedulingPolicy"></a>

```typescript
public readonly taskSchedulingPolicy: IResolvable | BatchPoolTaskSchedulingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>[]

task_scheduling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#task_scheduling_policy BatchPool#task_scheduling_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BatchPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#timeouts BatchPool#timeouts}

---

##### `userAccounts`<sup>Optional</sup> <a name="userAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.userAccounts"></a>

```typescript
public readonly userAccounts: IResolvable | BatchPoolUserAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>[]

user_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_accounts BatchPool#user_accounts}

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.windows"></a>

```typescript
public readonly windows: IResolvable | BatchPoolWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>[]

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#windows BatchPool#windows}

---

### BatchPoolContainerConfiguration <a name="BatchPoolContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolContainerConfiguration: batchPool.BatchPoolContainerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerImageNames">containerImageNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerRegistries">containerRegistries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#type BatchPool#type}. |

---

##### `containerImageNames`<sup>Optional</sup> <a name="containerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerImageNames"></a>

```typescript
public readonly containerImageNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}.

---

##### `containerRegistries`<sup>Optional</sup> <a name="containerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerRegistries"></a>

```typescript
public readonly containerRegistries: IResolvable | BatchPoolContainerConfigurationContainerRegistries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#type BatchPool#type}.

---

### BatchPoolContainerConfigurationContainerRegistries <a name="BatchPoolContainerConfigurationContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolContainerConfigurationContainerRegistries: batchPool.BatchPoolContainerConfigurationContainerRegistries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.registryServer">registryServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `registryServer`<sup>Optional</sup> <a name="registryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.registryServer"></a>

```typescript
public readonly registryServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolDataDisks <a name="BatchPoolDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolDataDisks: batchPool.BatchPoolDataDisks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.lun">lun</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#lun BatchPool#lun}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.caching">caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#caching BatchPool#caching}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}. |

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#lun BatchPool#lun}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#caching BatchPool#caching}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}.

---

### BatchPoolDiskEncryption <a name="BatchPoolDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolDiskEncryption: batchPool.BatchPoolDiskEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.property.diskEncryptionTarget">diskEncryptionTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}. |

---

##### `diskEncryptionTarget`<sup>Required</sup> <a name="diskEncryptionTarget" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.property.diskEncryptionTarget"></a>

```typescript
public readonly diskEncryptionTarget: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}.

---

### BatchPoolExtensions <a name="BatchPoolExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolExtensions: batchPool.BatchPoolExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#publisher BatchPool#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#type BatchPool#type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#automatic_upgrade_enabled BatchPool#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.protectedSettings">protectedSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.settingsJson">settingsJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#type BatchPool#type}.

---

##### `automaticUpgradeEnabled`<sup>Optional</sup> <a name="automaticUpgradeEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.automaticUpgradeEnabled"></a>

```typescript
public readonly automaticUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#automatic_upgrade_enabled BatchPool#automatic_upgrade_enabled}.

---

##### `autoUpgradeMinorVersion`<sup>Optional</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.autoUpgradeMinorVersion"></a>

```typescript
public readonly autoUpgradeMinorVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}.

---

##### `protectedSettings`<sup>Optional</sup> <a name="protectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.protectedSettings"></a>

```typescript
public readonly protectedSettings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}.

---

##### `provisionAfterExtensions`<sup>Optional</sup> <a name="provisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.provisionAfterExtensions"></a>

```typescript
public readonly provisionAfterExtensions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}.

---

##### `settingsJson`<sup>Optional</sup> <a name="settingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.settingsJson"></a>

```typescript
public readonly settingsJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}.

---

##### `typeHandlerVersion`<sup>Optional</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.typeHandlerVersion"></a>

```typescript
public readonly typeHandlerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}.

---

### BatchPoolFixedScale <a name="BatchPoolFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolFixedScale: batchPool.BatchPoolFixedScale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.nodeDeallocationMethod">nodeDeallocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.resizeTimeout">resizeTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetDedicatedNodes">targetDedicatedNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetLowPriorityNodes">targetLowPriorityNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}. |

---

##### `nodeDeallocationMethod`<sup>Optional</sup> <a name="nodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.nodeDeallocationMethod"></a>

```typescript
public readonly nodeDeallocationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}.

---

##### `resizeTimeout`<sup>Optional</sup> <a name="resizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.resizeTimeout"></a>

```typescript
public readonly resizeTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}.

---

##### `targetDedicatedNodes`<sup>Optional</sup> <a name="targetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetDedicatedNodes"></a>

```typescript
public readonly targetDedicatedNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}.

---

##### `targetLowPriorityNodes`<sup>Optional</sup> <a name="targetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetLowPriorityNodes"></a>

```typescript
public readonly targetLowPriorityNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}.

---

### BatchPoolIdentity <a name="BatchPoolIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolIdentity: batchPool.BatchPoolIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#type BatchPool#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#type BatchPool#type}.

---

### BatchPoolMount <a name="BatchPoolMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolMount: batchPool.BatchPoolMount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureBlobFileSystem">azureBlobFileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | azure_blob_file_system block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureFileShare">azureFileShare</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>[]</code> | azure_file_share block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.cifsMount">cifsMount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>[]</code> | cifs_mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.nfsMount">nfsMount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>[]</code> | nfs_mount block. |

---

##### `azureBlobFileSystem`<sup>Optional</sup> <a name="azureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureBlobFileSystem"></a>

```typescript
public readonly azureBlobFileSystem: BatchPoolMountAzureBlobFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

azure_blob_file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#azure_blob_file_system BatchPool#azure_blob_file_system}

---

##### `azureFileShare`<sup>Optional</sup> <a name="azureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureFileShare"></a>

```typescript
public readonly azureFileShare: IResolvable | BatchPoolMountAzureFileShare[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>[]

azure_file_share block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#azure_file_share BatchPool#azure_file_share}

---

##### `cifsMount`<sup>Optional</sup> <a name="cifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.cifsMount"></a>

```typescript
public readonly cifsMount: IResolvable | BatchPoolMountCifsMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>[]

cifs_mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#cifs_mount BatchPool#cifs_mount}

---

##### `nfsMount`<sup>Optional</sup> <a name="nfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.nfsMount"></a>

```typescript
public readonly nfsMount: IResolvable | BatchPoolMountNfsMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>[]

nfs_mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#nfs_mount BatchPool#nfs_mount}

---

### BatchPoolMountAzureBlobFileSystem <a name="BatchPoolMountAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolMountAzureBlobFileSystem: batchPool.BatchPoolMountAzureBlobFileSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#container_name BatchPool#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.relativeMountPath">relativeMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_key BatchPool#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.blobfuseOptions">blobfuseOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.identityId">identityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.sasKey">sasKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#container_name BatchPool#container_name}.

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.relativeMountPath"></a>

```typescript
public readonly relativeMountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

##### `blobfuseOptions`<sup>Optional</sup> <a name="blobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.blobfuseOptions"></a>

```typescript
public readonly blobfuseOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}.

---

##### `sasKey`<sup>Optional</sup> <a name="sasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.sasKey"></a>

```typescript
public readonly sasKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}.

---

### BatchPoolMountAzureFileShare <a name="BatchPoolMountAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolMountAzureFileShare: batchPool.BatchPoolMountAzureFileShare = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_key BatchPool#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.azureFileUrl">azureFileUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.relativeMountPath">relativeMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.mountOptions">mountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `azureFileUrl`<sup>Required</sup> <a name="azureFileUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.azureFileUrl"></a>

```typescript
public readonly azureFileUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}.

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.relativeMountPath"></a>

```typescript
public readonly relativeMountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolMountCifsMount <a name="BatchPoolMountCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolMountCifsMount: batchPool.BatchPoolMountCifsMount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.relativeMountPath">relativeMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#source BatchPool#source}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.mountOptions">mountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.relativeMountPath"></a>

```typescript
public readonly relativeMountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#source BatchPool#source}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolMountNfsMount <a name="BatchPoolMountNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolMountNfsMount: batchPool.BatchPoolMountNfsMount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.relativeMountPath">relativeMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#source BatchPool#source}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.mountOptions">mountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.relativeMountPath"></a>

```typescript
public readonly relativeMountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#source BatchPool#source}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolNetworkConfiguration <a name="BatchPoolNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolNetworkConfiguration: batchPool.BatchPoolNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.acceleratedNetworkingEnabled">acceleratedNetworkingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#accelerated_networking_enabled BatchPool#accelerated_networking_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.dynamicVnetAssignmentScope">dynamicVnetAssignmentScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.endpointConfiguration">endpointConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>[]</code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicAddressProvisioningType">publicAddressProvisioningType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicIps">publicIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}. |

---

##### `acceleratedNetworkingEnabled`<sup>Optional</sup> <a name="acceleratedNetworkingEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.acceleratedNetworkingEnabled"></a>

```typescript
public readonly acceleratedNetworkingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#accelerated_networking_enabled BatchPool#accelerated_networking_enabled}.

---

##### `dynamicVnetAssignmentScope`<sup>Optional</sup> <a name="dynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.dynamicVnetAssignmentScope"></a>

```typescript
public readonly dynamicVnetAssignmentScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: IResolvable | BatchPoolNetworkConfigurationEndpointConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>[]

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#endpoint_configuration BatchPool#endpoint_configuration}

---

##### `publicAddressProvisioningType`<sup>Optional</sup> <a name="publicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicAddressProvisioningType"></a>

```typescript
public readonly publicAddressProvisioningType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicIps"></a>

```typescript
public readonly publicIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}.

---

### BatchPoolNetworkConfigurationEndpointConfiguration <a name="BatchPoolNetworkConfigurationEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolNetworkConfigurationEndpointConfiguration: batchPool.BatchPoolNetworkConfigurationEndpointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.backendPort">backendPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.frontendPortRange">frontendPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#protocol BatchPool#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.networkSecurityGroupRules">networkSecurityGroupRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>[]</code> | network_security_group_rules block. |

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}.

---

##### `frontendPortRange`<sup>Required</sup> <a name="frontendPortRange" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.frontendPortRange"></a>

```typescript
public readonly frontendPortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#protocol BatchPool#protocol}.

---

##### `networkSecurityGroupRules`<sup>Optional</sup> <a name="networkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.networkSecurityGroupRules"></a>

```typescript
public readonly networkSecurityGroupRules: IResolvable | BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>[]

network_security_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#network_security_group_rules BatchPool#network_security_group_rules}

---

### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules: batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.access">access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#access BatchPool#access}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#priority BatchPool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#access BatchPool#access}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#priority BatchPool#priority}.

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourceAddressPrefix"></a>

```typescript
public readonly sourceAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}.

---

##### `sourcePortRanges`<sup>Optional</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}.

---

### BatchPoolNodePlacement <a name="BatchPoolNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolNodePlacement: batchPool.BatchPoolNodePlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#policy BatchPool#policy}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#policy BatchPool#policy}.

---

### BatchPoolStartTask <a name="BatchPoolStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolStartTask: batchPool.BatchPoolStartTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commandLine">commandLine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#command_line BatchPool#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.userIdentity">userIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | user_identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commonEnvironmentProperties">commonEnvironmentProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.container">container</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>[]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.resourceFile">resourceFile</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>[]</code> | resource_file block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.taskRetryMaximum">taskRetryMaximum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.waitForSuccess">waitForSuccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}. |

---

##### `commandLine`<sup>Required</sup> <a name="commandLine" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commandLine"></a>

```typescript
public readonly commandLine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#command_line BatchPool#command_line}.

---

##### `userIdentity`<sup>Required</sup> <a name="userIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.userIdentity"></a>

```typescript
public readonly userIdentity: BatchPoolStartTaskUserIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

user_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_identity BatchPool#user_identity}

---

##### `commonEnvironmentProperties`<sup>Optional</sup> <a name="commonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commonEnvironmentProperties"></a>

```typescript
public readonly commonEnvironmentProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.container"></a>

```typescript
public readonly container: IResolvable | BatchPoolStartTaskContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#container BatchPool#container}

---

##### `resourceFile`<sup>Optional</sup> <a name="resourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.resourceFile"></a>

```typescript
public readonly resourceFile: IResolvable | BatchPoolStartTaskResourceFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>[]

resource_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#resource_file BatchPool#resource_file}

---

##### `taskRetryMaximum`<sup>Optional</sup> <a name="taskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.taskRetryMaximum"></a>

```typescript
public readonly taskRetryMaximum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}.

---

##### `waitForSuccess`<sup>Optional</sup> <a name="waitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.waitForSuccess"></a>

```typescript
public readonly waitForSuccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}.

---

### BatchPoolStartTaskContainer <a name="BatchPoolStartTaskContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolStartTaskContainer: batchPool.BatchPoolStartTaskContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#image_name BatchPool#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.registry">registry</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>[]</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.runOptions">runOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#run_options BatchPool#run_options}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#image_name BatchPool#image_name}.

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.registry"></a>

```typescript
public readonly registry: IResolvable | BatchPoolStartTaskContainerRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>[]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#registry BatchPool#registry}

---

##### `runOptions`<sup>Optional</sup> <a name="runOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.runOptions"></a>

```typescript
public readonly runOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#run_options BatchPool#run_options}.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}.

---

### BatchPoolStartTaskContainerRegistry <a name="BatchPoolStartTaskContainerRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolStartTaskContainerRegistry: batchPool.BatchPoolStartTaskContainerRegistry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.registryServer">registryServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | The User Assigned Identity to use for Container Registry access. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `registryServer`<sup>Required</sup> <a name="registryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.registryServer"></a>

```typescript
public readonly registryServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

The User Assigned Identity to use for Container Registry access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolStartTaskResourceFile <a name="BatchPoolStartTaskResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolStartTaskResourceFile: batchPool.BatchPoolStartTaskResourceFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.autoStorageContainerName">autoStorageContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.blobPrefix">blobPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.fileMode">fileMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.filePath">filePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#file_path BatchPool#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.httpUrl">httpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#http_url BatchPool#http_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.storageContainerUrl">storageContainerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}. |

---

##### `autoStorageContainerName`<sup>Optional</sup> <a name="autoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.autoStorageContainerName"></a>

```typescript
public readonly autoStorageContainerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}.

---

##### `blobPrefix`<sup>Optional</sup> <a name="blobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.blobPrefix"></a>

```typescript
public readonly blobPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}.

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.fileMode"></a>

```typescript
public readonly fileMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}.

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#file_path BatchPool#file_path}.

---

##### `httpUrl`<sup>Optional</sup> <a name="httpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#http_url BatchPool#http_url}.

---

##### `storageContainerUrl`<sup>Optional</sup> <a name="storageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.storageContainerUrl"></a>

```typescript
public readonly storageContainerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}.

---

### BatchPoolStartTaskUserIdentity <a name="BatchPoolStartTaskUserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolStartTaskUserIdentity: batchPool.BatchPoolStartTaskUserIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.autoUser">autoUser</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | auto_user block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `autoUser`<sup>Optional</sup> <a name="autoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.autoUser"></a>

```typescript
public readonly autoUser: BatchPoolStartTaskUserIdentityAutoUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

auto_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#auto_user BatchPool#auto_user}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolStartTaskUserIdentityAutoUser <a name="BatchPoolStartTaskUserIdentityAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolStartTaskUserIdentityAutoUser: batchPool.BatchPoolStartTaskUserIdentityAutoUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.elevationLevel">elevationLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#scope BatchPool#scope}. |

---

##### `elevationLevel`<sup>Optional</sup> <a name="elevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.elevationLevel"></a>

```typescript
public readonly elevationLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#scope BatchPool#scope}.

---

### BatchPoolStorageImageReference <a name="BatchPoolStorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolStorageImageReference: batchPool.BatchPoolStorageImageReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#offer BatchPool#offer}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#publisher BatchPool#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#sku BatchPool#sku}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#version BatchPool#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#offer BatchPool#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#sku BatchPool#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#version BatchPool#version}.

---

### BatchPoolTaskSchedulingPolicy <a name="BatchPoolTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolTaskSchedulingPolicy: batchPool.BatchPoolTaskSchedulingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.property.nodeFillType">nodeFillType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}. |

---

##### `nodeFillType`<sup>Optional</sup> <a name="nodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.property.nodeFillType"></a>

```typescript
public readonly nodeFillType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}.

---

### BatchPoolTimeouts <a name="BatchPoolTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolTimeouts: batchPool.BatchPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#create BatchPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#delete BatchPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#read BatchPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#update BatchPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#create BatchPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#delete BatchPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#read BatchPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#update BatchPool#update}.

---

### BatchPoolUserAccounts <a name="BatchPoolUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolUserAccounts: batchPool.BatchPoolUserAccounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.elevationLevel">elevationLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.linuxUserConfiguration">linuxUserConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>[]</code> | linux_user_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.windowsUserConfiguration">windowsUserConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>[]</code> | windows_user_configuration block. |

---

##### `elevationLevel`<sup>Required</sup> <a name="elevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.elevationLevel"></a>

```typescript
public readonly elevationLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `linuxUserConfiguration`<sup>Optional</sup> <a name="linuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.linuxUserConfiguration"></a>

```typescript
public readonly linuxUserConfiguration: IResolvable | BatchPoolUserAccountsLinuxUserConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>[]

linux_user_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#linux_user_configuration BatchPool#linux_user_configuration}

---

##### `windowsUserConfiguration`<sup>Optional</sup> <a name="windowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.windowsUserConfiguration"></a>

```typescript
public readonly windowsUserConfiguration: IResolvable | BatchPoolUserAccountsWindowsUserConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>[]

windows_user_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#windows_user_configuration BatchPool#windows_user_configuration}

---

### BatchPoolUserAccountsLinuxUserConfiguration <a name="BatchPoolUserAccountsLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolUserAccountsLinuxUserConfiguration: batchPool.BatchPoolUserAccountsLinuxUserConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.gid">gid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#gid BatchPool#gid}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.sshPrivateKey">sshPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.uid">uid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#uid BatchPool#uid}. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#gid BatchPool#gid}.

---

##### `sshPrivateKey`<sup>Optional</sup> <a name="sshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.sshPrivateKey"></a>

```typescript
public readonly sshPrivateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#uid BatchPool#uid}.

---

### BatchPoolUserAccountsWindowsUserConfiguration <a name="BatchPoolUserAccountsWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolUserAccountsWindowsUserConfiguration: batchPool.BatchPoolUserAccountsWindowsUserConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.property.loginMode">loginMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}. |

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.property.loginMode"></a>

```typescript
public readonly loginMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}.

---

### BatchPoolWindows <a name="BatchPoolWindows" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

const batchPoolWindows: batchPool.BatchPoolWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}. |

---

##### `enableAutomaticUpdates`<sup>Optional</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows.property.enableAutomaticUpdates"></a>

```typescript
public readonly enableAutomaticUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchPoolAutoScaleOutputReference <a name="BatchPoolAutoScaleOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolAutoScaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resetEvaluationInterval">resetEvaluationInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationInterval` <a name="resetEvaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resetEvaluationInterval"></a>

```typescript
public resetEvaluationInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationIntervalInput">evaluationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formulaInput">formulaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationInterval">evaluationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formula">formula</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationIntervalInput`<sup>Optional</sup> <a name="evaluationIntervalInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationIntervalInput"></a>

```typescript
public readonly evaluationIntervalInput: string;
```

- *Type:* string

---

##### `formulaInput`<sup>Optional</sup> <a name="formulaInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formulaInput"></a>

```typescript
public readonly formulaInput: string;
```

- *Type:* string

---

##### `evaluationInterval`<sup>Required</sup> <a name="evaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationInterval"></a>

```typescript
public readonly evaluationInterval: string;
```

- *Type:* string

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formula"></a>

```typescript
public readonly formula: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolAutoScale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---


### BatchPoolCertificateList <a name="BatchPoolCertificateList" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get"></a>

```typescript
public get(index: number): BatchPoolCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>[]

---


### BatchPoolCertificateOutputReference <a name="BatchPoolCertificateOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetStoreName">resetStoreName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStoreName` <a name="resetStoreName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetStoreName"></a>

```typescript
public resetStoreName(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetVisibility"></a>

```typescript
public resetVisibility(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocationInput">storeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeNameInput">storeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibilityInput">visibilityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocation">storeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeName">storeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibility">visibility</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `storeLocationInput`<sup>Optional</sup> <a name="storeLocationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocationInput"></a>

```typescript
public readonly storeLocationInput: string;
```

- *Type:* string

---

##### `storeNameInput`<sup>Optional</sup> <a name="storeNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeNameInput"></a>

```typescript
public readonly storeNameInput: string;
```

- *Type:* string

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `storeLocation`<sup>Required</sup> <a name="storeLocation" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocation"></a>

```typescript
public readonly storeLocation: string;
```

- *Type:* string

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeName"></a>

```typescript
public readonly storeName: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibility"></a>

```typescript
public readonly visibility: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolCertificate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>

---


### BatchPoolContainerConfigurationContainerRegistriesList <a name="BatchPoolContainerConfigurationContainerRegistriesList" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolContainerConfigurationContainerRegistriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get"></a>

```typescript
public get(index: number): BatchPoolContainerConfigurationContainerRegistriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolContainerConfigurationContainerRegistries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>[]

---


### BatchPoolContainerConfigurationContainerRegistriesOutputReference <a name="BatchPoolContainerConfigurationContainerRegistriesOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetRegistryServer">resetRegistryServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRegistryServer` <a name="resetRegistryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetRegistryServer"></a>

```typescript
public resetRegistryServer(): void
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServerInput">registryServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer">registryServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `registryServerInput`<sup>Optional</sup> <a name="registryServerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServerInput"></a>

```typescript
public readonly registryServerInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `registryServer`<sup>Required</sup> <a name="registryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer"></a>

```typescript
public readonly registryServer: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolContainerConfigurationContainerRegistries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>

---


### BatchPoolContainerConfigurationOutputReference <a name="BatchPoolContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolContainerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries">putContainerRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerImageNames">resetContainerImageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerRegistries">resetContainerRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerRegistries` <a name="putContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries"></a>

```typescript
public putContainerRegistries(value: IResolvable | BatchPoolContainerConfigurationContainerRegistries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>[]

---

##### `resetContainerImageNames` <a name="resetContainerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerImageNames"></a>

```typescript
public resetContainerImageNames(): void
```

##### `resetContainerRegistries` <a name="resetContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerRegistries"></a>

```typescript
public resetContainerRegistries(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistries">containerRegistries</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList">BatchPoolContainerConfigurationContainerRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNamesInput">containerImageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistriesInput">containerRegistriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNames">containerImageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerRegistries`<sup>Required</sup> <a name="containerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistries"></a>

```typescript
public readonly containerRegistries: BatchPoolContainerConfigurationContainerRegistriesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList">BatchPoolContainerConfigurationContainerRegistriesList</a>

---

##### `containerImageNamesInput`<sup>Optional</sup> <a name="containerImageNamesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNamesInput"></a>

```typescript
public readonly containerImageNamesInput: string[];
```

- *Type:* string[]

---

##### `containerRegistriesInput`<sup>Optional</sup> <a name="containerRegistriesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistriesInput"></a>

```typescript
public readonly containerRegistriesInput: IResolvable | BatchPoolContainerConfigurationContainerRegistries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `containerImageNames`<sup>Required</sup> <a name="containerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNames"></a>

```typescript
public readonly containerImageNames: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolContainerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---


### BatchPoolDataDisksList <a name="BatchPoolDataDisksList" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolDataDisksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get"></a>

```typescript
public get(index: number): BatchPoolDataDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolDataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>[]

---


### BatchPoolDataDisksOutputReference <a name="BatchPoolDataDisksOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolDataDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetCaching">resetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaching` <a name="resetCaching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetCaching"></a>

```typescript
public resetCaching(): void
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetStorageAccountType"></a>

```typescript
public resetStorageAccountType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.cachingInput">cachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lunInput">lunInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.caching">caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.cachingInput"></a>

```typescript
public readonly cachingInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lunInput"></a>

```typescript
public readonly lunInput: number;
```

- *Type:* number

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolDataDisks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>

---


### BatchPoolDiskEncryptionList <a name="BatchPoolDiskEncryptionList" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolDiskEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get"></a>

```typescript
public get(index: number): BatchPoolDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>[]

---


### BatchPoolDiskEncryptionOutputReference <a name="BatchPoolDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolDiskEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTargetInput">diskEncryptionTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget">diskEncryptionTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionTargetInput`<sup>Optional</sup> <a name="diskEncryptionTargetInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTargetInput"></a>

```typescript
public readonly diskEncryptionTargetInput: string;
```

- *Type:* string

---

##### `diskEncryptionTarget`<sup>Required</sup> <a name="diskEncryptionTarget" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget"></a>

```typescript
public readonly diskEncryptionTarget: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolDiskEncryption;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>

---


### BatchPoolExtensionsList <a name="BatchPoolExtensionsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get"></a>

```typescript
public get(index: number): BatchPoolExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>[]

---


### BatchPoolExtensionsOutputReference <a name="BatchPoolExtensionsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutomaticUpgradeEnabled">resetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutoUpgradeMinorVersion">resetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProtectedSettings">resetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProvisionAfterExtensions">resetProvisionAfterExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetSettingsJson">resetSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetTypeHandlerVersion">resetTypeHandlerVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticUpgradeEnabled` <a name="resetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutomaticUpgradeEnabled"></a>

```typescript
public resetAutomaticUpgradeEnabled(): void
```

##### `resetAutoUpgradeMinorVersion` <a name="resetAutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutoUpgradeMinorVersion"></a>

```typescript
public resetAutoUpgradeMinorVersion(): void
```

##### `resetProtectedSettings` <a name="resetProtectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProtectedSettings"></a>

```typescript
public resetProtectedSettings(): void
```

##### `resetProvisionAfterExtensions` <a name="resetProvisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProvisionAfterExtensions"></a>

```typescript
public resetProvisionAfterExtensions(): void
```

##### `resetSettingsJson` <a name="resetSettingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetSettingsJson"></a>

```typescript
public resetSettingsJson(): void
```

##### `resetTypeHandlerVersion` <a name="resetTypeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetTypeHandlerVersion"></a>

```typescript
public resetTypeHandlerVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabledInput">automaticUpgradeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersionInput">autoUpgradeMinorVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettingsInput">protectedSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensionsInput">provisionAfterExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJsonInput">settingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersionInput">typeHandlerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettings">protectedSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJson">settingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticUpgradeEnabledInput`<sup>Optional</sup> <a name="automaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabledInput"></a>

```typescript
public readonly automaticUpgradeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="autoUpgradeMinorVersionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersionInput"></a>

```typescript
public readonly autoUpgradeMinorVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protectedSettingsInput`<sup>Optional</sup> <a name="protectedSettingsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettingsInput"></a>

```typescript
public readonly protectedSettingsInput: string;
```

- *Type:* string

---

##### `provisionAfterExtensionsInput`<sup>Optional</sup> <a name="provisionAfterExtensionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensionsInput"></a>

```typescript
public readonly provisionAfterExtensionsInput: string[];
```

- *Type:* string[]

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `settingsJsonInput`<sup>Optional</sup> <a name="settingsJsonInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJsonInput"></a>

```typescript
public readonly settingsJsonInput: string;
```

- *Type:* string

---

##### `typeHandlerVersionInput`<sup>Optional</sup> <a name="typeHandlerVersionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersionInput"></a>

```typescript
public readonly typeHandlerVersionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `automaticUpgradeEnabled`<sup>Required</sup> <a name="automaticUpgradeEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabled"></a>

```typescript
public readonly automaticUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoUpgradeMinorVersion`<sup>Required</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion"></a>

```typescript
public readonly autoUpgradeMinorVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectedSettings`<sup>Required</sup> <a name="protectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettings"></a>

```typescript
public readonly protectedSettings: string;
```

- *Type:* string

---

##### `provisionAfterExtensions`<sup>Required</sup> <a name="provisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensions"></a>

```typescript
public readonly provisionAfterExtensions: string[];
```

- *Type:* string[]

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `settingsJson`<sup>Required</sup> <a name="settingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJson"></a>

```typescript
public readonly settingsJson: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersion"></a>

```typescript
public readonly typeHandlerVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolExtensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>

---


### BatchPoolFixedScaleOutputReference <a name="BatchPoolFixedScaleOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolFixedScaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetNodeDeallocationMethod">resetNodeDeallocationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetResizeTimeout">resetResizeTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetDedicatedNodes">resetTargetDedicatedNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetLowPriorityNodes">resetTargetLowPriorityNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeDeallocationMethod` <a name="resetNodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetNodeDeallocationMethod"></a>

```typescript
public resetNodeDeallocationMethod(): void
```

##### `resetResizeTimeout` <a name="resetResizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetResizeTimeout"></a>

```typescript
public resetResizeTimeout(): void
```

##### `resetTargetDedicatedNodes` <a name="resetTargetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetDedicatedNodes"></a>

```typescript
public resetTargetDedicatedNodes(): void
```

##### `resetTargetLowPriorityNodes` <a name="resetTargetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetLowPriorityNodes"></a>

```typescript
public resetTargetLowPriorityNodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethodInput">nodeDeallocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeoutInput">resizeTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodesInput">targetDedicatedNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodesInput">targetLowPriorityNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethod">nodeDeallocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeout">resizeTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodes">targetDedicatedNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes">targetLowPriorityNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeDeallocationMethodInput`<sup>Optional</sup> <a name="nodeDeallocationMethodInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethodInput"></a>

```typescript
public readonly nodeDeallocationMethodInput: string;
```

- *Type:* string

---

##### `resizeTimeoutInput`<sup>Optional</sup> <a name="resizeTimeoutInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeoutInput"></a>

```typescript
public readonly resizeTimeoutInput: string;
```

- *Type:* string

---

##### `targetDedicatedNodesInput`<sup>Optional</sup> <a name="targetDedicatedNodesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodesInput"></a>

```typescript
public readonly targetDedicatedNodesInput: number;
```

- *Type:* number

---

##### `targetLowPriorityNodesInput`<sup>Optional</sup> <a name="targetLowPriorityNodesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodesInput"></a>

```typescript
public readonly targetLowPriorityNodesInput: number;
```

- *Type:* number

---

##### `nodeDeallocationMethod`<sup>Required</sup> <a name="nodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethod"></a>

```typescript
public readonly nodeDeallocationMethod: string;
```

- *Type:* string

---

##### `resizeTimeout`<sup>Required</sup> <a name="resizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeout"></a>

```typescript
public readonly resizeTimeout: string;
```

- *Type:* string

---

##### `targetDedicatedNodes`<sup>Required</sup> <a name="targetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodes"></a>

```typescript
public readonly targetDedicatedNodes: number;
```

- *Type:* number

---

##### `targetLowPriorityNodes`<sup>Required</sup> <a name="targetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes"></a>

```typescript
public readonly targetLowPriorityNodes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolFixedScale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---


### BatchPoolIdentityOutputReference <a name="BatchPoolIdentityOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---


### BatchPoolMountAzureBlobFileSystemOutputReference <a name="BatchPoolMountAzureBlobFileSystemOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountAzureBlobFileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetBlobfuseOptions">resetBlobfuseOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetSasKey">resetSasKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetAccountKey"></a>

```typescript
public resetAccountKey(): void
```

##### `resetBlobfuseOptions` <a name="resetBlobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetBlobfuseOptions"></a>

```typescript
public resetBlobfuseOptions(): void
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetIdentityId"></a>

```typescript
public resetIdentityId(): void
```

##### `resetSasKey` <a name="resetSasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetSasKey"></a>

```typescript
public resetSasKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptionsInput">blobfuseOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityIdInput">identityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPathInput">relativeMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKeyInput">sasKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions">blobfuseOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityId">identityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath">relativeMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey">sasKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `blobfuseOptionsInput`<sup>Optional</sup> <a name="blobfuseOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptionsInput"></a>

```typescript
public readonly blobfuseOptionsInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityIdInput"></a>

```typescript
public readonly identityIdInput: string;
```

- *Type:* string

---

##### `relativeMountPathInput`<sup>Optional</sup> <a name="relativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPathInput"></a>

```typescript
public readonly relativeMountPathInput: string;
```

- *Type:* string

---

##### `sasKeyInput`<sup>Optional</sup> <a name="sasKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKeyInput"></a>

```typescript
public readonly sasKeyInput: string;
```

- *Type:* string

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `blobfuseOptions`<sup>Required</sup> <a name="blobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions"></a>

```typescript
public readonly blobfuseOptions: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath"></a>

```typescript
public readonly relativeMountPath: string;
```

- *Type:* string

---

##### `sasKey`<sup>Required</sup> <a name="sasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey"></a>

```typescript
public readonly sasKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolMountAzureBlobFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---


### BatchPoolMountAzureFileShareList <a name="BatchPoolMountAzureFileShareList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountAzureFileShareList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get"></a>

```typescript
public get(index: number): BatchPoolMountAzureFileShareOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolMountAzureFileShare[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>[]

---


### BatchPoolMountAzureFileShareOutputReference <a name="BatchPoolMountAzureFileShareOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountAzureFileShareOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrlInput">azureFileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPathInput">relativeMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrl">azureFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptions">mountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPath">relativeMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `azureFileUrlInput`<sup>Optional</sup> <a name="azureFileUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrlInput"></a>

```typescript
public readonly azureFileUrlInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string;
```

- *Type:* string

---

##### `relativeMountPathInput`<sup>Optional</sup> <a name="relativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPathInput"></a>

```typescript
public readonly relativeMountPathInput: string;
```

- *Type:* string

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `azureFileUrl`<sup>Required</sup> <a name="azureFileUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrl"></a>

```typescript
public readonly azureFileUrl: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPath"></a>

```typescript
public readonly relativeMountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolMountAzureFileShare;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>

---


### BatchPoolMountCifsMountList <a name="BatchPoolMountCifsMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountCifsMountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get"></a>

```typescript
public get(index: number): BatchPoolMountCifsMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolMountCifsMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>[]

---


### BatchPoolMountCifsMountOutputReference <a name="BatchPoolMountCifsMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountCifsMountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPathInput">relativeMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptions">mountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPath">relativeMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `relativeMountPathInput`<sup>Optional</sup> <a name="relativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPathInput"></a>

```typescript
public readonly relativeMountPathInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPath"></a>

```typescript
public readonly relativeMountPath: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolMountCifsMount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>

---


### BatchPoolMountList <a name="BatchPoolMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get"></a>

```typescript
public get(index: number): BatchPoolMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>[]

---


### BatchPoolMountNfsMountList <a name="BatchPoolMountNfsMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountNfsMountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get"></a>

```typescript
public get(index: number): BatchPoolMountNfsMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolMountNfsMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>[]

---


### BatchPoolMountNfsMountOutputReference <a name="BatchPoolMountNfsMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountNfsMountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPathInput">relativeMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptions">mountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPath">relativeMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string;
```

- *Type:* string

---

##### `relativeMountPathInput`<sup>Optional</sup> <a name="relativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPathInput"></a>

```typescript
public readonly relativeMountPathInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPath"></a>

```typescript
public readonly relativeMountPath: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolMountNfsMount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>

---


### BatchPoolMountOutputReference <a name="BatchPoolMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolMountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem">putAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare">putAzureFileShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount">putCifsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount">putNfsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureBlobFileSystem">resetAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureFileShare">resetAzureFileShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetCifsMount">resetCifsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetNfsMount">resetNfsMount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobFileSystem` <a name="putAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem"></a>

```typescript
public putAzureBlobFileSystem(value: BatchPoolMountAzureBlobFileSystem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---

##### `putAzureFileShare` <a name="putAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare"></a>

```typescript
public putAzureFileShare(value: IResolvable | BatchPoolMountAzureFileShare[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>[]

---

##### `putCifsMount` <a name="putCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount"></a>

```typescript
public putCifsMount(value: IResolvable | BatchPoolMountCifsMount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>[]

---

##### `putNfsMount` <a name="putNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount"></a>

```typescript
public putNfsMount(value: IResolvable | BatchPoolMountNfsMount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>[]

---

##### `resetAzureBlobFileSystem` <a name="resetAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureBlobFileSystem"></a>

```typescript
public resetAzureBlobFileSystem(): void
```

##### `resetAzureFileShare` <a name="resetAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureFileShare"></a>

```typescript
public resetAzureFileShare(): void
```

##### `resetCifsMount` <a name="resetCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetCifsMount"></a>

```typescript
public resetCifsMount(): void
```

##### `resetNfsMount` <a name="resetNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetNfsMount"></a>

```typescript
public resetNfsMount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystem">azureBlobFileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference">BatchPoolMountAzureBlobFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShare">azureFileShare</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList">BatchPoolMountAzureFileShareList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMount">cifsMount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList">BatchPoolMountCifsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMount">nfsMount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList">BatchPoolMountNfsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystemInput">azureBlobFileSystemInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShareInput">azureFileShareInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMountInput">cifsMountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMountInput">nfsMountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureBlobFileSystem`<sup>Required</sup> <a name="azureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystem"></a>

```typescript
public readonly azureBlobFileSystem: BatchPoolMountAzureBlobFileSystemOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference">BatchPoolMountAzureBlobFileSystemOutputReference</a>

---

##### `azureFileShare`<sup>Required</sup> <a name="azureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShare"></a>

```typescript
public readonly azureFileShare: BatchPoolMountAzureFileShareList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList">BatchPoolMountAzureFileShareList</a>

---

##### `cifsMount`<sup>Required</sup> <a name="cifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMount"></a>

```typescript
public readonly cifsMount: BatchPoolMountCifsMountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList">BatchPoolMountCifsMountList</a>

---

##### `nfsMount`<sup>Required</sup> <a name="nfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMount"></a>

```typescript
public readonly nfsMount: BatchPoolMountNfsMountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList">BatchPoolMountNfsMountList</a>

---

##### `azureBlobFileSystemInput`<sup>Optional</sup> <a name="azureBlobFileSystemInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystemInput"></a>

```typescript
public readonly azureBlobFileSystemInput: BatchPoolMountAzureBlobFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---

##### `azureFileShareInput`<sup>Optional</sup> <a name="azureFileShareInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShareInput"></a>

```typescript
public readonly azureFileShareInput: IResolvable | BatchPoolMountAzureFileShare[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>[]

---

##### `cifsMountInput`<sup>Optional</sup> <a name="cifsMountInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMountInput"></a>

```typescript
public readonly cifsMountInput: IResolvable | BatchPoolMountCifsMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>[]

---

##### `nfsMountInput`<sup>Optional</sup> <a name="nfsMountInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMountInput"></a>

```typescript
public readonly nfsMountInput: IResolvable | BatchPoolMountNfsMount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolMount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>

---


### BatchPoolNetworkConfigurationEndpointConfigurationList <a name="BatchPoolNetworkConfigurationEndpointConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get"></a>

```typescript
public get(index: number): BatchPoolNetworkConfigurationEndpointConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolNetworkConfigurationEndpointConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>[]

---


### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get"></a>

```typescript
public get(index: number): BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>[]

---


### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resetSourcePortRanges">resetSourcePortRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourcePortRanges` <a name="resetSourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resetSourcePortRanges"></a>

```typescript
public resetSourcePortRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefixInput">sourceAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRangesInput">sourcePortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `sourceAddressPrefixInput`<sup>Optional</sup> <a name="sourceAddressPrefixInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefixInput"></a>

```typescript
public readonly sourceAddressPrefixInput: string;
```

- *Type:* string

---

##### `sourcePortRangesInput`<sup>Optional</sup> <a name="sourcePortRangesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRangesInput"></a>

```typescript
public readonly sourcePortRangesInput: string[];
```

- *Type:* string[]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix"></a>

```typescript
public readonly sourceAddressPrefix: string;
```

- *Type:* string

---

##### `sourcePortRanges`<sup>Required</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>

---


### BatchPoolNetworkConfigurationEndpointConfigurationOutputReference <a name="BatchPoolNetworkConfigurationEndpointConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules">putNetworkSecurityGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resetNetworkSecurityGroupRules">resetNetworkSecurityGroupRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkSecurityGroupRules` <a name="putNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules"></a>

```typescript
public putNetworkSecurityGroupRules(value: IResolvable | BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>[]

---

##### `resetNetworkSecurityGroupRules` <a name="resetNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resetNetworkSecurityGroupRules"></a>

```typescript
public resetNetworkSecurityGroupRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules">networkSecurityGroupRules</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRangeInput">frontendPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRulesInput">networkSecurityGroupRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange">frontendPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkSecurityGroupRules`<sup>Required</sup> <a name="networkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules"></a>

```typescript
public readonly networkSecurityGroupRules: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a>

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPortInput"></a>

```typescript
public readonly backendPortInput: number;
```

- *Type:* number

---

##### `frontendPortRangeInput`<sup>Optional</sup> <a name="frontendPortRangeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRangeInput"></a>

```typescript
public readonly frontendPortRangeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkSecurityGroupRulesInput`<sup>Optional</sup> <a name="networkSecurityGroupRulesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRulesInput"></a>

```typescript
public readonly networkSecurityGroupRulesInput: IResolvable | BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `frontendPortRange`<sup>Required</sup> <a name="frontendPortRange" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange"></a>

```typescript
public readonly frontendPortRange: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolNetworkConfigurationEndpointConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>

---


### BatchPoolNetworkConfigurationOutputReference <a name="BatchPoolNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetAcceleratedNetworkingEnabled">resetAcceleratedNetworkingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetDynamicVnetAssignmentScope">resetDynamicVnetAssignmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicAddressProvisioningType">resetPublicAddressProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicIps">resetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration"></a>

```typescript
public putEndpointConfiguration(value: IResolvable | BatchPoolNetworkConfigurationEndpointConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>[]

---

##### `resetAcceleratedNetworkingEnabled` <a name="resetAcceleratedNetworkingEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetAcceleratedNetworkingEnabled"></a>

```typescript
public resetAcceleratedNetworkingEnabled(): void
```

##### `resetDynamicVnetAssignmentScope` <a name="resetDynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetDynamicVnetAssignmentScope"></a>

```typescript
public resetDynamicVnetAssignmentScope(): void
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetEndpointConfiguration"></a>

```typescript
public resetEndpointConfiguration(): void
```

##### `resetPublicAddressProvisioningType` <a name="resetPublicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicAddressProvisioningType"></a>

```typescript
public resetPublicAddressProvisioningType(): void
```

##### `resetPublicIps` <a name="resetPublicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicIps"></a>

```typescript
public resetPublicIps(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList">BatchPoolNetworkConfigurationEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabledInput">acceleratedNetworkingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScopeInput">dynamicVnetAssignmentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningTypeInput">publicAddressProvisioningTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIpsInput">publicIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabled">acceleratedNetworkingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope">dynamicVnetAssignmentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType">publicAddressProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIps">publicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: BatchPoolNetworkConfigurationEndpointConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList">BatchPoolNetworkConfigurationEndpointConfigurationList</a>

---

##### `acceleratedNetworkingEnabledInput`<sup>Optional</sup> <a name="acceleratedNetworkingEnabledInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabledInput"></a>

```typescript
public readonly acceleratedNetworkingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicVnetAssignmentScopeInput`<sup>Optional</sup> <a name="dynamicVnetAssignmentScopeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScopeInput"></a>

```typescript
public readonly dynamicVnetAssignmentScopeInput: string;
```

- *Type:* string

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfigurationInput"></a>

```typescript
public readonly endpointConfigurationInput: IResolvable | BatchPoolNetworkConfigurationEndpointConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>[]

---

##### `publicAddressProvisioningTypeInput`<sup>Optional</sup> <a name="publicAddressProvisioningTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningTypeInput"></a>

```typescript
public readonly publicAddressProvisioningTypeInput: string;
```

- *Type:* string

---

##### `publicIpsInput`<sup>Optional</sup> <a name="publicIpsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIpsInput"></a>

```typescript
public readonly publicIpsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `acceleratedNetworkingEnabled`<sup>Required</sup> <a name="acceleratedNetworkingEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabled"></a>

```typescript
public readonly acceleratedNetworkingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicVnetAssignmentScope`<sup>Required</sup> <a name="dynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope"></a>

```typescript
public readonly dynamicVnetAssignmentScope: string;
```

- *Type:* string

---

##### `publicAddressProvisioningType`<sup>Required</sup> <a name="publicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType"></a>

```typescript
public readonly publicAddressProvisioningType: string;
```

- *Type:* string

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIps"></a>

```typescript
public readonly publicIps: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---


### BatchPoolNodePlacementList <a name="BatchPoolNodePlacementList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolNodePlacementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get"></a>

```typescript
public get(index: number): BatchPoolNodePlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolNodePlacement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>[]

---


### BatchPoolNodePlacementOutputReference <a name="BatchPoolNodePlacementOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolNodePlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolNodePlacement;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>

---


### BatchPoolStartTaskContainerList <a name="BatchPoolStartTaskContainerList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get"></a>

```typescript
public get(index: number): BatchPoolStartTaskContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolStartTaskContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>[]

---


### BatchPoolStartTaskContainerOutputReference <a name="BatchPoolStartTaskContainerOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry">putRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRegistry">resetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRunOptions">resetRunOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegistry` <a name="putRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry"></a>

```typescript
public putRegistry(value: IResolvable | BatchPoolStartTaskContainerRegistry[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>[]

---

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRegistry"></a>

```typescript
public resetRegistry(): void
```

##### `resetRunOptions` <a name="resetRunOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRunOptions"></a>

```typescript
public resetRunOptions(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList">BatchPoolStartTaskContainerRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registryInput">registryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptionsInput">runOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptions">runOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registry"></a>

```typescript
public readonly registry: BatchPoolStartTaskContainerRegistryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList">BatchPoolStartTaskContainerRegistryList</a>

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registryInput"></a>

```typescript
public readonly registryInput: IResolvable | BatchPoolStartTaskContainerRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>[]

---

##### `runOptionsInput`<sup>Optional</sup> <a name="runOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptionsInput"></a>

```typescript
public readonly runOptionsInput: string;
```

- *Type:* string

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `runOptions`<sup>Required</sup> <a name="runOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptions"></a>

```typescript
public readonly runOptions: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolStartTaskContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>

---


### BatchPoolStartTaskContainerRegistryList <a name="BatchPoolStartTaskContainerRegistryList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskContainerRegistryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get"></a>

```typescript
public get(index: number): BatchPoolStartTaskContainerRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolStartTaskContainerRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>[]

---


### BatchPoolStartTaskContainerRegistryOutputReference <a name="BatchPoolStartTaskContainerRegistryOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskContainerRegistryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServerInput">registryServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServer">registryServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `registryServerInput`<sup>Optional</sup> <a name="registryServerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServerInput"></a>

```typescript
public readonly registryServerInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `registryServer`<sup>Required</sup> <a name="registryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServer"></a>

```typescript
public readonly registryServer: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolStartTaskContainerRegistry;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>

---


### BatchPoolStartTaskOutputReference <a name="BatchPoolStartTaskOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile">putResourceFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity">putUserIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetCommonEnvironmentProperties">resetCommonEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetResourceFile">resetResourceFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetTaskRetryMaximum">resetTaskRetryMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetWaitForSuccess">resetWaitForSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer"></a>

```typescript
public putContainer(value: IResolvable | BatchPoolStartTaskContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>[]

---

##### `putResourceFile` <a name="putResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile"></a>

```typescript
public putResourceFile(value: IResolvable | BatchPoolStartTaskResourceFile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>[]

---

##### `putUserIdentity` <a name="putUserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity"></a>

```typescript
public putUserIdentity(value: BatchPoolStartTaskUserIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---

##### `resetCommonEnvironmentProperties` <a name="resetCommonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetCommonEnvironmentProperties"></a>

```typescript
public resetCommonEnvironmentProperties(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetResourceFile` <a name="resetResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetResourceFile"></a>

```typescript
public resetResourceFile(): void
```

##### `resetTaskRetryMaximum` <a name="resetTaskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetTaskRetryMaximum"></a>

```typescript
public resetTaskRetryMaximum(): void
```

##### `resetWaitForSuccess` <a name="resetWaitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetWaitForSuccess"></a>

```typescript
public resetWaitForSuccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList">BatchPoolStartTaskContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFile">resourceFile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList">BatchPoolStartTaskResourceFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentity">userIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference">BatchPoolStartTaskUserIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLineInput">commandLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentPropertiesInput">commonEnvironmentPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.containerInput">containerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFileInput">resourceFileInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximumInput">taskRetryMaximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentityInput">userIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccessInput">waitForSuccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLine">commandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentProperties">commonEnvironmentProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximum">taskRetryMaximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccess">waitForSuccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.container"></a>

```typescript
public readonly container: BatchPoolStartTaskContainerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList">BatchPoolStartTaskContainerList</a>

---

##### `resourceFile`<sup>Required</sup> <a name="resourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFile"></a>

```typescript
public readonly resourceFile: BatchPoolStartTaskResourceFileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList">BatchPoolStartTaskResourceFileList</a>

---

##### `userIdentity`<sup>Required</sup> <a name="userIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentity"></a>

```typescript
public readonly userIdentity: BatchPoolStartTaskUserIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference">BatchPoolStartTaskUserIdentityOutputReference</a>

---

##### `commandLineInput`<sup>Optional</sup> <a name="commandLineInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLineInput"></a>

```typescript
public readonly commandLineInput: string;
```

- *Type:* string

---

##### `commonEnvironmentPropertiesInput`<sup>Optional</sup> <a name="commonEnvironmentPropertiesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentPropertiesInput"></a>

```typescript
public readonly commonEnvironmentPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: IResolvable | BatchPoolStartTaskContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>[]

---

##### `resourceFileInput`<sup>Optional</sup> <a name="resourceFileInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFileInput"></a>

```typescript
public readonly resourceFileInput: IResolvable | BatchPoolStartTaskResourceFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>[]

---

##### `taskRetryMaximumInput`<sup>Optional</sup> <a name="taskRetryMaximumInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximumInput"></a>

```typescript
public readonly taskRetryMaximumInput: number;
```

- *Type:* number

---

##### `userIdentityInput`<sup>Optional</sup> <a name="userIdentityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentityInput"></a>

```typescript
public readonly userIdentityInput: BatchPoolStartTaskUserIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---

##### `waitForSuccessInput`<sup>Optional</sup> <a name="waitForSuccessInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccessInput"></a>

```typescript
public readonly waitForSuccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commandLine`<sup>Required</sup> <a name="commandLine" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLine"></a>

```typescript
public readonly commandLine: string;
```

- *Type:* string

---

##### `commonEnvironmentProperties`<sup>Required</sup> <a name="commonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentProperties"></a>

```typescript
public readonly commonEnvironmentProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskRetryMaximum`<sup>Required</sup> <a name="taskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximum"></a>

```typescript
public readonly taskRetryMaximum: number;
```

- *Type:* number

---

##### `waitForSuccess`<sup>Required</sup> <a name="waitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccess"></a>

```typescript
public readonly waitForSuccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolStartTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---


### BatchPoolStartTaskResourceFileList <a name="BatchPoolStartTaskResourceFileList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskResourceFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get"></a>

```typescript
public get(index: number): BatchPoolStartTaskResourceFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolStartTaskResourceFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>[]

---


### BatchPoolStartTaskResourceFileOutputReference <a name="BatchPoolStartTaskResourceFileOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskResourceFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetAutoStorageContainerName">resetAutoStorageContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetBlobPrefix">resetBlobPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFileMode">resetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetHttpUrl">resetHttpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetStorageContainerUrl">resetStorageContainerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoStorageContainerName` <a name="resetAutoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetAutoStorageContainerName"></a>

```typescript
public resetAutoStorageContainerName(): void
```

##### `resetBlobPrefix` <a name="resetBlobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetBlobPrefix"></a>

```typescript
public resetBlobPrefix(): void
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFileMode"></a>

```typescript
public resetFileMode(): void
```

##### `resetFilePath` <a name="resetFilePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFilePath"></a>

```typescript
public resetFilePath(): void
```

##### `resetHttpUrl` <a name="resetHttpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetHttpUrl"></a>

```typescript
public resetHttpUrl(): void
```

##### `resetStorageContainerUrl` <a name="resetStorageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetStorageContainerUrl"></a>

```typescript
public resetStorageContainerUrl(): void
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerNameInput">autoStorageContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefixInput">blobPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrlInput">httpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrlInput">storageContainerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName">autoStorageContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefix">blobPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileMode">fileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrl">httpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl">storageContainerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoStorageContainerNameInput`<sup>Optional</sup> <a name="autoStorageContainerNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerNameInput"></a>

```typescript
public readonly autoStorageContainerNameInput: string;
```

- *Type:* string

---

##### `blobPrefixInput`<sup>Optional</sup> <a name="blobPrefixInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefixInput"></a>

```typescript
public readonly blobPrefixInput: string;
```

- *Type:* string

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileModeInput"></a>

```typescript
public readonly fileModeInput: string;
```

- *Type:* string

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `httpUrlInput`<sup>Optional</sup> <a name="httpUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrlInput"></a>

```typescript
public readonly httpUrlInput: string;
```

- *Type:* string

---

##### `storageContainerUrlInput`<sup>Optional</sup> <a name="storageContainerUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrlInput"></a>

```typescript
public readonly storageContainerUrlInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `autoStorageContainerName`<sup>Required</sup> <a name="autoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName"></a>

```typescript
public readonly autoStorageContainerName: string;
```

- *Type:* string

---

##### `blobPrefix`<sup>Required</sup> <a name="blobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefix"></a>

```typescript
public readonly blobPrefix: string;
```

- *Type:* string

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileMode"></a>

```typescript
public readonly fileMode: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

---

##### `storageContainerUrl`<sup>Required</sup> <a name="storageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl"></a>

```typescript
public readonly storageContainerUrl: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolStartTaskResourceFile;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>

---


### BatchPoolStartTaskUserIdentityAutoUserOutputReference <a name="BatchPoolStartTaskUserIdentityAutoUserOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetElevationLevel">resetElevationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetElevationLevel` <a name="resetElevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetElevationLevel"></a>

```typescript
public resetElevationLevel(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevelInput">elevationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel">elevationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elevationLevelInput`<sup>Optional</sup> <a name="elevationLevelInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevelInput"></a>

```typescript
public readonly elevationLevelInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `elevationLevel`<sup>Required</sup> <a name="elevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel"></a>

```typescript
public readonly elevationLevel: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolStartTaskUserIdentityAutoUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---


### BatchPoolStartTaskUserIdentityOutputReference <a name="BatchPoolStartTaskUserIdentityOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStartTaskUserIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser">putAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetAutoUser">resetAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoUser` <a name="putAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser"></a>

```typescript
public putAutoUser(value: BatchPoolStartTaskUserIdentityAutoUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---

##### `resetAutoUser` <a name="resetAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetAutoUser"></a>

```typescript
public resetAutoUser(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUser">autoUser</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference">BatchPoolStartTaskUserIdentityAutoUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUserInput">autoUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoUser`<sup>Required</sup> <a name="autoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUser"></a>

```typescript
public readonly autoUser: BatchPoolStartTaskUserIdentityAutoUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference">BatchPoolStartTaskUserIdentityAutoUserOutputReference</a>

---

##### `autoUserInput`<sup>Optional</sup> <a name="autoUserInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUserInput"></a>

```typescript
public readonly autoUserInput: BatchPoolStartTaskUserIdentityAutoUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolStartTaskUserIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---


### BatchPoolStorageImageReferenceOutputReference <a name="BatchPoolStorageImageReferenceOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolStorageImageReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetOffer">resetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOffer` <a name="resetOffer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetOffer"></a>

```typescript
public resetOffer(): void
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetPublisher"></a>

```typescript
public resetPublisher(): void
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetSku"></a>

```typescript
public resetSku(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchPoolStorageImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---


### BatchPoolTaskSchedulingPolicyList <a name="BatchPoolTaskSchedulingPolicyList" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolTaskSchedulingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get"></a>

```typescript
public get(index: number): BatchPoolTaskSchedulingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolTaskSchedulingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>[]

---


### BatchPoolTaskSchedulingPolicyOutputReference <a name="BatchPoolTaskSchedulingPolicyOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolTaskSchedulingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resetNodeFillType">resetNodeFillType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeFillType` <a name="resetNodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resetNodeFillType"></a>

```typescript
public resetNodeFillType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillTypeInput">nodeFillTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType">nodeFillType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeFillTypeInput`<sup>Optional</sup> <a name="nodeFillTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillTypeInput"></a>

```typescript
public readonly nodeFillTypeInput: string;
```

- *Type:* string

---

##### `nodeFillType`<sup>Required</sup> <a name="nodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType"></a>

```typescript
public readonly nodeFillType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolTaskSchedulingPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>

---


### BatchPoolTimeoutsOutputReference <a name="BatchPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

---


### BatchPoolUserAccountsLinuxUserConfigurationList <a name="BatchPoolUserAccountsLinuxUserConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolUserAccountsLinuxUserConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get"></a>

```typescript
public get(index: number): BatchPoolUserAccountsLinuxUserConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolUserAccountsLinuxUserConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>[]

---


### BatchPoolUserAccountsLinuxUserConfigurationOutputReference <a name="BatchPoolUserAccountsLinuxUserConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetSshPrivateKey">resetSshPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGid` <a name="resetGid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetSshPrivateKey` <a name="resetSshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetSshPrivateKey"></a>

```typescript
public resetSshPrivateKey(): void
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gidInput">gidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKeyInput">sshPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uidInput">uidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid">gid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey">sshPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid">uid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: number;
```

- *Type:* number

---

##### `sshPrivateKeyInput`<sup>Optional</sup> <a name="sshPrivateKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKeyInput"></a>

```typescript
public readonly sshPrivateKeyInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: number;
```

- *Type:* number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey"></a>

```typescript
public readonly sshPrivateKey: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolUserAccountsLinuxUserConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>

---


### BatchPoolUserAccountsList <a name="BatchPoolUserAccountsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolUserAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get"></a>

```typescript
public get(index: number): BatchPoolUserAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolUserAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>[]

---


### BatchPoolUserAccountsOutputReference <a name="BatchPoolUserAccountsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolUserAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration">putLinuxUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration">putWindowsUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetLinuxUserConfiguration">resetLinuxUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetWindowsUserConfiguration">resetWindowsUserConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinuxUserConfiguration` <a name="putLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration"></a>

```typescript
public putLinuxUserConfiguration(value: IResolvable | BatchPoolUserAccountsLinuxUserConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>[]

---

##### `putWindowsUserConfiguration` <a name="putWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration"></a>

```typescript
public putWindowsUserConfiguration(value: IResolvable | BatchPoolUserAccountsWindowsUserConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>[]

---

##### `resetLinuxUserConfiguration` <a name="resetLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetLinuxUserConfiguration"></a>

```typescript
public resetLinuxUserConfiguration(): void
```

##### `resetWindowsUserConfiguration` <a name="resetWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetWindowsUserConfiguration"></a>

```typescript
public resetWindowsUserConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfiguration">linuxUserConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList">BatchPoolUserAccountsLinuxUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfiguration">windowsUserConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList">BatchPoolUserAccountsWindowsUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevelInput">elevationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfigurationInput">linuxUserConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfigurationInput">windowsUserConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevel">elevationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linuxUserConfiguration`<sup>Required</sup> <a name="linuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfiguration"></a>

```typescript
public readonly linuxUserConfiguration: BatchPoolUserAccountsLinuxUserConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList">BatchPoolUserAccountsLinuxUserConfigurationList</a>

---

##### `windowsUserConfiguration`<sup>Required</sup> <a name="windowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfiguration"></a>

```typescript
public readonly windowsUserConfiguration: BatchPoolUserAccountsWindowsUserConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList">BatchPoolUserAccountsWindowsUserConfigurationList</a>

---

##### `elevationLevelInput`<sup>Optional</sup> <a name="elevationLevelInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevelInput"></a>

```typescript
public readonly elevationLevelInput: string;
```

- *Type:* string

---

##### `linuxUserConfigurationInput`<sup>Optional</sup> <a name="linuxUserConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfigurationInput"></a>

```typescript
public readonly linuxUserConfigurationInput: IResolvable | BatchPoolUserAccountsLinuxUserConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `windowsUserConfigurationInput`<sup>Optional</sup> <a name="windowsUserConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfigurationInput"></a>

```typescript
public readonly windowsUserConfigurationInput: IResolvable | BatchPoolUserAccountsWindowsUserConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>[]

---

##### `elevationLevel`<sup>Required</sup> <a name="elevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevel"></a>

```typescript
public readonly elevationLevel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolUserAccounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>

---


### BatchPoolUserAccountsWindowsUserConfigurationList <a name="BatchPoolUserAccountsWindowsUserConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolUserAccountsWindowsUserConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get"></a>

```typescript
public get(index: number): BatchPoolUserAccountsWindowsUserConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolUserAccountsWindowsUserConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>[]

---


### BatchPoolUserAccountsWindowsUserConfigurationOutputReference <a name="BatchPoolUserAccountsWindowsUserConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginModeInput">loginModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode">loginMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loginModeInput`<sup>Optional</sup> <a name="loginModeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginModeInput"></a>

```typescript
public readonly loginModeInput: string;
```

- *Type:* string

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode"></a>

```typescript
public readonly loginMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolUserAccountsWindowsUserConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>

---


### BatchPoolWindowsList <a name="BatchPoolWindowsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get"></a>

```typescript
public get(index: number): BatchPoolWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolWindows[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>[]

---


### BatchPoolWindowsOutputReference <a name="BatchPoolWindowsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer"></a>

```typescript
import { batchPool } from '@cdktf/provider-azurerm'

new batchPool.BatchPoolWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resetEnableAutomaticUpdates">resetEnableAutomaticUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAutomaticUpdates` <a name="resetEnableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resetEnableAutomaticUpdates"></a>

```typescript
public resetEnableAutomaticUpdates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdatesInput">enableAutomaticUpdatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableAutomaticUpdatesInput`<sup>Optional</sup> <a name="enableAutomaticUpdatesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdatesInput"></a>

```typescript
public readonly enableAutomaticUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableAutomaticUpdates`<sup>Required</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdates"></a>

```typescript
public readonly enableAutomaticUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchPoolWindows;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>

---



