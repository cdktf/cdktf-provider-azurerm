# `oracleCloudVmCluster` Submodule <a name="`oracleCloudVmCluster` Submodule" id="@cdktf/provider-azurerm.oracleCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleCloudVmCluster <a name="OracleCloudVmCluster" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster azurerm_oracle_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.Initializer"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

new oracleCloudVmCluster.OracleCloudVmCluster(scope: Construct, id: string, config: OracleCloudVmClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig">OracleCloudVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig">OracleCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetBackupSubnetCidr">resetBackupSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDataStoragePercentage">resetDataStoragePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDataStorageSizeInTbs">resetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDbNodeStorageSizeInGbs">resetDbNodeStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetLocalBackupEnabled">resetLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetMemorySizeInGbs">resetMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetScanListenerPortTcpSsl">resetScanListenerPortTcpSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetSparseDiskgroupEnabled">resetSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.putDataCollectionOptions"></a>

```typescript
public putDataCollectionOptions(value: OracleCloudVmClusterDataCollectionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions">OracleCloudVmClusterDataCollectionOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleCloudVmClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts">OracleCloudVmClusterTimeouts</a>

---

##### `resetBackupSubnetCidr` <a name="resetBackupSubnetCidr" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetBackupSubnetCidr"></a>

```typescript
public resetBackupSubnetCidr(): void
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDataCollectionOptions"></a>

```typescript
public resetDataCollectionOptions(): void
```

##### `resetDataStoragePercentage` <a name="resetDataStoragePercentage" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDataStoragePercentage"></a>

```typescript
public resetDataStoragePercentage(): void
```

##### `resetDataStorageSizeInTbs` <a name="resetDataStorageSizeInTbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDataStorageSizeInTbs"></a>

```typescript
public resetDataStorageSizeInTbs(): void
```

##### `resetDbNodeStorageSizeInGbs` <a name="resetDbNodeStorageSizeInGbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDbNodeStorageSizeInGbs"></a>

```typescript
public resetDbNodeStorageSizeInGbs(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalBackupEnabled` <a name="resetLocalBackupEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetLocalBackupEnabled"></a>

```typescript
public resetLocalBackupEnabled(): void
```

##### `resetMemorySizeInGbs` <a name="resetMemorySizeInGbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetMemorySizeInGbs"></a>

```typescript
public resetMemorySizeInGbs(): void
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetScanListenerPortTcp"></a>

```typescript
public resetScanListenerPortTcp(): void
```

##### `resetScanListenerPortTcpSsl` <a name="resetScanListenerPortTcpSsl" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetScanListenerPortTcpSsl"></a>

```typescript
public resetScanListenerPortTcpSsl(): void
```

##### `resetSparseDiskgroupEnabled` <a name="resetSparseDiskgroupEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetSparseDiskgroupEnabled"></a>

```typescript
public resetSparseDiskgroupEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isConstruct"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

oracleCloudVmCluster.OracleCloudVmCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isTerraformElement"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

oracleCloudVmCluster.OracleCloudVmCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isTerraformResource"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

oracleCloudVmCluster.OracleCloudVmCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.generateConfigForImport"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

oracleCloudVmCluster.OracleCloudVmCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OracleCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference">OracleCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.hostnameActual">hostnameActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference">OracleCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.backupSubnetCidrInput">backupSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions">OracleCloudVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataStoragePercentageInput">dataStoragePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataStorageSizeInTbsInput">dataStorageSizeInTbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dbNodeStorageSizeInGbsInput">dbNodeStorageSizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dbServersInput">dbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.giVersionInput">giVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.localBackupEnabledInput">localBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.memorySizeInGbsInput">memorySizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.scanListenerPortTcpSslInput">scanListenerPortTcpSslInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.sparseDiskgroupEnabledInput">sparseDiskgroupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts">OracleCloudVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dbServers">dbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.giVersion">giVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.localBackupEnabled">localBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.sparseDiskgroupEnabled">sparseDiskgroupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: OracleCloudVmClusterDataCollectionOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference">OracleCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `hostnameActual`<sup>Required</sup> <a name="hostnameActual" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.hostnameActual"></a>

```typescript
public readonly hostnameActual: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.timeouts"></a>

```typescript
public readonly timeouts: OracleCloudVmClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference">OracleCloudVmClusterTimeoutsOutputReference</a>

---

##### `backupSubnetCidrInput`<sup>Optional</sup> <a name="backupSubnetCidrInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.backupSubnetCidrInput"></a>

```typescript
public readonly backupSubnetCidrInput: string;
```

- *Type:* string

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataCollectionOptionsInput"></a>

```typescript
public readonly dataCollectionOptionsInput: OracleCloudVmClusterDataCollectionOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions">OracleCloudVmClusterDataCollectionOptions</a>

---

##### `dataStoragePercentageInput`<sup>Optional</sup> <a name="dataStoragePercentageInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataStoragePercentageInput"></a>

```typescript
public readonly dataStoragePercentageInput: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbsInput`<sup>Optional</sup> <a name="dataStorageSizeInTbsInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataStorageSizeInTbsInput"></a>

```typescript
public readonly dataStorageSizeInTbsInput: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbsInput`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbsInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dbNodeStorageSizeInGbsInput"></a>

```typescript
public readonly dbNodeStorageSizeInGbsInput: number;
```

- *Type:* number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dbServersInput"></a>

```typescript
public readonly dbServersInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `giVersionInput`<sup>Optional</sup> <a name="giVersionInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.giVersionInput"></a>

```typescript
public readonly giVersionInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `localBackupEnabledInput`<sup>Optional</sup> <a name="localBackupEnabledInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.localBackupEnabledInput"></a>

```typescript
public readonly localBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memorySizeInGbsInput`<sup>Optional</sup> <a name="memorySizeInGbsInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.memorySizeInGbsInput"></a>

```typescript
public readonly memorySizeInGbsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.scanListenerPortTcpInput"></a>

```typescript
public readonly scanListenerPortTcpInput: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSslInput`<sup>Optional</sup> <a name="scanListenerPortTcpSslInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.scanListenerPortTcpSslInput"></a>

```typescript
public readonly scanListenerPortTcpSslInput: number;
```

- *Type:* number

---

##### `sparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="sparseDiskgroupEnabledInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.sparseDiskgroupEnabledInput"></a>

```typescript
public readonly sparseDiskgroupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.sshPublicKeysInput"></a>

```typescript
public readonly sshPublicKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleCloudVmClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts">OracleCloudVmClusterTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dataStoragePercentage`<sup>Required</sup> <a name="dataStoragePercentage" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataStoragePercentage"></a>

```typescript
public readonly dataStoragePercentage: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `localBackupEnabled`<sup>Required</sup> <a name="localBackupEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.localBackupEnabled"></a>

```typescript
public readonly localBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

---

##### `sparseDiskgroupEnabled`<sup>Required</sup> <a name="sparseDiskgroupEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.sparseDiskgroupEnabled"></a>

```typescript
public readonly sparseDiskgroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleCloudVmClusterConfig <a name="OracleCloudVmClusterConfig" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.Initializer"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

const oracleCloudVmClusterConfig: oracleCloudVmCluster.OracleCloudVmClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#cloud_exadata_infrastructure_id OracleCloudVmCluster#cloud_exadata_infrastructure_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#cpu_core_count OracleCloudVmCluster#cpu_core_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dbServers">dbServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#db_servers OracleCloudVmCluster#db_servers}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#display_name OracleCloudVmCluster#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.giVersion">giVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#gi_version OracleCloudVmCluster#gi_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#hostname OracleCloudVmCluster#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#license_model OracleCloudVmCluster#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#location OracleCloudVmCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#name OracleCloudVmCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#resource_group_name OracleCloudVmCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#ssh_public_keys OracleCloudVmCluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#subnet_id OracleCloudVmCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#virtual_network_id OracleCloudVmCluster#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#backup_subnet_cidr OracleCloudVmCluster#backup_subnet_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#cluster_name OracleCloudVmCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions">OracleCloudVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#data_storage_percentage OracleCloudVmCluster#data_storage_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#data_storage_size_in_tbs OracleCloudVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#db_node_storage_size_in_gbs OracleCloudVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#domain OracleCloudVmCluster#domain}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#id OracleCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.localBackupEnabled">localBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#local_backup_enabled OracleCloudVmCluster#local_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#memory_size_in_gbs OracleCloudVmCluster#memory_size_in_gbs}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#scan_listener_port_tcp OracleCloudVmCluster#scan_listener_port_tcp}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#scan_listener_port_tcp_ssl OracleCloudVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.sparseDiskgroupEnabled">sparseDiskgroupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#sparse_diskgroup_enabled OracleCloudVmCluster#sparse_diskgroup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#tags OracleCloudVmCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts">OracleCloudVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#time_zone OracleCloudVmCluster#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#zone_id OracleCloudVmCluster#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#cloud_exadata_infrastructure_id OracleCloudVmCluster#cloud_exadata_infrastructure_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#cpu_core_count OracleCloudVmCluster#cpu_core_count}.

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#db_servers OracleCloudVmCluster#db_servers}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#display_name OracleCloudVmCluster#display_name}.

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#gi_version OracleCloudVmCluster#gi_version}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#hostname OracleCloudVmCluster#hostname}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#license_model OracleCloudVmCluster#license_model}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#location OracleCloudVmCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#name OracleCloudVmCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#resource_group_name OracleCloudVmCluster#resource_group_name}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#ssh_public_keys OracleCloudVmCluster#ssh_public_keys}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#subnet_id OracleCloudVmCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#virtual_network_id OracleCloudVmCluster#virtual_network_id}.

---

##### `backupSubnetCidr`<sup>Optional</sup> <a name="backupSubnetCidr" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#backup_subnet_cidr OracleCloudVmCluster#backup_subnet_cidr}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#cluster_name OracleCloudVmCluster#cluster_name}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: OracleCloudVmClusterDataCollectionOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions">OracleCloudVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#data_collection_options OracleCloudVmCluster#data_collection_options}

---

##### `dataStoragePercentage`<sup>Optional</sup> <a name="dataStoragePercentage" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dataStoragePercentage"></a>

```typescript
public readonly dataStoragePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#data_storage_percentage OracleCloudVmCluster#data_storage_percentage}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#data_storage_size_in_tbs OracleCloudVmCluster#data_storage_size_in_tbs}.

---

##### `dbNodeStorageSizeInGbs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#db_node_storage_size_in_gbs OracleCloudVmCluster#db_node_storage_size_in_gbs}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#domain OracleCloudVmCluster#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#id OracleCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localBackupEnabled`<sup>Optional</sup> <a name="localBackupEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.localBackupEnabled"></a>

```typescript
public readonly localBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#local_backup_enabled OracleCloudVmCluster#local_backup_enabled}.

---

##### `memorySizeInGbs`<sup>Optional</sup> <a name="memorySizeInGbs" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#memory_size_in_gbs OracleCloudVmCluster#memory_size_in_gbs}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#scan_listener_port_tcp OracleCloudVmCluster#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#scan_listener_port_tcp_ssl OracleCloudVmCluster#scan_listener_port_tcp_ssl}.

---

##### `sparseDiskgroupEnabled`<sup>Optional</sup> <a name="sparseDiskgroupEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.sparseDiskgroupEnabled"></a>

```typescript
public readonly sparseDiskgroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#sparse_diskgroup_enabled OracleCloudVmCluster#sparse_diskgroup_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#tags OracleCloudVmCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleCloudVmClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts">OracleCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#timeouts OracleCloudVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#time_zone OracleCloudVmCluster#time_zone}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#zone_id OracleCloudVmCluster#zone_id}.

---

### OracleCloudVmClusterDataCollectionOptions <a name="OracleCloudVmClusterDataCollectionOptions" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions.Initializer"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

const oracleCloudVmClusterDataCollectionOptions: oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions.property.diagnosticsEventsEnabled">diagnosticsEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#diagnostics_events_enabled OracleCloudVmCluster#diagnostics_events_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions.property.healthMonitoringEnabled">healthMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#health_monitoring_enabled OracleCloudVmCluster#health_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions.property.incidentLogsEnabled">incidentLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#incident_logs_enabled OracleCloudVmCluster#incident_logs_enabled}. |

---

##### `diagnosticsEventsEnabled`<sup>Optional</sup> <a name="diagnosticsEventsEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions.property.diagnosticsEventsEnabled"></a>

```typescript
public readonly diagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#diagnostics_events_enabled OracleCloudVmCluster#diagnostics_events_enabled}.

---

##### `healthMonitoringEnabled`<sup>Optional</sup> <a name="healthMonitoringEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions.property.healthMonitoringEnabled"></a>

```typescript
public readonly healthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#health_monitoring_enabled OracleCloudVmCluster#health_monitoring_enabled}.

---

##### `incidentLogsEnabled`<sup>Optional</sup> <a name="incidentLogsEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions.property.incidentLogsEnabled"></a>

```typescript
public readonly incidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#incident_logs_enabled OracleCloudVmCluster#incident_logs_enabled}.

---

### OracleCloudVmClusterTimeouts <a name="OracleCloudVmClusterTimeouts" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.Initializer"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

const oracleCloudVmClusterTimeouts: oracleCloudVmCluster.OracleCloudVmClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#create OracleCloudVmCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#delete OracleCloudVmCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#read OracleCloudVmCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#update OracleCloudVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#create OracleCloudVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#delete OracleCloudVmCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#read OracleCloudVmCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/oracle_cloud_vm_cluster#update OracleCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleCloudVmClusterDataCollectionOptionsOutputReference <a name="OracleCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

new oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled">resetDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled">resetHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resetIncidentLogsEnabled">resetIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiagnosticsEventsEnabled` <a name="resetDiagnosticsEventsEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled"></a>

```typescript
public resetDiagnosticsEventsEnabled(): void
```

##### `resetHealthMonitoringEnabled` <a name="resetHealthMonitoringEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled"></a>

```typescript
public resetHealthMonitoringEnabled(): void
```

##### `resetIncidentLogsEnabled` <a name="resetIncidentLogsEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.resetIncidentLogsEnabled"></a>

```typescript
public resetIncidentLogsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput">diagnosticsEventsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput">healthMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput">incidentLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">diagnosticsEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">healthMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.incidentLogsEnabled">incidentLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions">OracleCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="diagnosticsEventsEnabledInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput"></a>

```typescript
public readonly diagnosticsEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthMonitoringEnabledInput`<sup>Optional</sup> <a name="healthMonitoringEnabledInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput"></a>

```typescript
public readonly healthMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `incidentLogsEnabledInput`<sup>Optional</sup> <a name="incidentLogsEnabledInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput"></a>

```typescript
public readonly incidentLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diagnosticsEventsEnabled`<sup>Required</sup> <a name="diagnosticsEventsEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```typescript
public readonly diagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthMonitoringEnabled`<sup>Required</sup> <a name="healthMonitoringEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```typescript
public readonly healthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `incidentLogsEnabled`<sup>Required</sup> <a name="incidentLogsEnabled" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```typescript
public readonly incidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleCloudVmClusterDataCollectionOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterDataCollectionOptions">OracleCloudVmClusterDataCollectionOptions</a>

---


### OracleCloudVmClusterTimeoutsOutputReference <a name="OracleCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleCloudVmCluster } from '@cdktf/provider-azurerm'

new oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts">OracleCloudVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleCloudVmClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleCloudVmCluster.OracleCloudVmClusterTimeouts">OracleCloudVmClusterTimeouts</a>

---



