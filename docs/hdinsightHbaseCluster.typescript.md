# `hdinsightHbaseCluster` Submodule <a name="`hdinsightHbaseCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightHbaseCluster <a name="HdinsightHbaseCluster" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster azurerm_hdinsight_hbase_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseCluster(scope: Construct, id: string, config: HdinsightHbaseClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig">HdinsightHbaseClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig">HdinsightHbaseClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion">putComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation">putComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption">putDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway">putGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores">putMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putPrivateLinkConfiguration">putPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile">putSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2">putStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetComputeIsolation">resetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMetastores">resetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetPrivateLinkConfiguration">resetPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetSecurityProfile">resetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccountGen2">resetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentVersion` <a name="putComponentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion"></a>

```typescript
public putComponentVersion(value: HdinsightHbaseClusterComponentVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

---

##### `putComputeIsolation` <a name="putComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation"></a>

```typescript
public putComputeIsolation(value: HdinsightHbaseClusterComputeIsolation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

---

##### `putDiskEncryption` <a name="putDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption"></a>

```typescript
public putDiskEncryption(value: IResolvable | HdinsightHbaseClusterDiskEncryption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>[]

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension"></a>

```typescript
public putExtension(value: HdinsightHbaseClusterExtension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

---

##### `putGateway` <a name="putGateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway"></a>

```typescript
public putGateway(value: HdinsightHbaseClusterGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

---

##### `putMetastores` <a name="putMetastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores"></a>

```typescript
public putMetastores(value: HdinsightHbaseClusterMetastores): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor"></a>

```typescript
public putMonitor(value: HdinsightHbaseClusterMonitor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork"></a>

```typescript
public putNetwork(value: HdinsightHbaseClusterNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

---

##### `putPrivateLinkConfiguration` <a name="putPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putPrivateLinkConfiguration"></a>

```typescript
public putPrivateLinkConfiguration(value: HdinsightHbaseClusterPrivateLinkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putPrivateLinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration">HdinsightHbaseClusterPrivateLinkConfiguration</a>

---

##### `putRoles` <a name="putRoles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles"></a>

```typescript
public putRoles(value: HdinsightHbaseClusterRoles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

---

##### `putSecurityProfile` <a name="putSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile"></a>

```typescript
public putSecurityProfile(value: HdinsightHbaseClusterSecurityProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount"></a>

```typescript
public putStorageAccount(value: IResolvable | HdinsightHbaseClusterStorageAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>[]

---

##### `putStorageAccountGen2` <a name="putStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2"></a>

```typescript
public putStorageAccountGen2(value: HdinsightHbaseClusterStorageAccountGen2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: HdinsightHbaseClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>

---

##### `resetComputeIsolation` <a name="resetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetComputeIsolation"></a>

```typescript
public resetComputeIsolation(): void
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetastores` <a name="resetMetastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMetastores"></a>

```typescript
public resetMetastores(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPrivateLinkConfiguration` <a name="resetPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetPrivateLinkConfiguration"></a>

```typescript
public resetPrivateLinkConfiguration(): void
```

##### `resetSecurityProfile` <a name="resetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetSecurityProfile"></a>

```typescript
public resetSecurityProfile(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetStorageAccountGen2` <a name="resetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccountGen2"></a>

```typescript
public resetStorageAccountGen2(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HdinsightHbaseCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HdinsightHbaseCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HdinsightHbaseCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HdinsightHbaseCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightHbaseCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference">HdinsightHbaseClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference">HdinsightHbaseClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryption">diskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList">HdinsightHbaseClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference">HdinsightHbaseClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference">HdinsightHbaseClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.httpsEndpoint">httpsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference">HdinsightHbaseClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference">HdinsightHbaseClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference">HdinsightHbaseClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.privateLinkConfiguration">privateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference">HdinsightHbaseClusterPrivateLinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference">HdinsightHbaseClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference">HdinsightHbaseClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.sshEndpoint">sshEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList">HdinsightHbaseClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference">HdinsightHbaseClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference">HdinsightHbaseClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersionInput">componentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolationInput">computeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extensionInput">extensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gatewayInput">gatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastoresInput">metastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitorInput">monitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.privateLinkConfigurationInput">privateLinkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration">HdinsightHbaseClusterPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.rolesInput">rolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfileInput">securityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2Input">storageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountInput">storageAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersion"></a>

```typescript
public readonly componentVersion: HdinsightHbaseClusterComponentVersionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference">HdinsightHbaseClusterComponentVersionOutputReference</a>

---

##### `computeIsolation`<sup>Required</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolation"></a>

```typescript
public readonly computeIsolation: HdinsightHbaseClusterComputeIsolationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference">HdinsightHbaseClusterComputeIsolationOutputReference</a>

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: HdinsightHbaseClusterDiskEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList">HdinsightHbaseClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extension"></a>

```typescript
public readonly extension: HdinsightHbaseClusterExtensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference">HdinsightHbaseClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gateway"></a>

```typescript
public readonly gateway: HdinsightHbaseClusterGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference">HdinsightHbaseClusterGatewayOutputReference</a>

---

##### `httpsEndpoint`<sup>Required</sup> <a name="httpsEndpoint" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.httpsEndpoint"></a>

```typescript
public readonly httpsEndpoint: string;
```

- *Type:* string

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastores"></a>

```typescript
public readonly metastores: HdinsightHbaseClusterMetastoresOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference">HdinsightHbaseClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitor"></a>

```typescript
public readonly monitor: HdinsightHbaseClusterMonitorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference">HdinsightHbaseClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.network"></a>

```typescript
public readonly network: HdinsightHbaseClusterNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference">HdinsightHbaseClusterNetworkOutputReference</a>

---

##### `privateLinkConfiguration`<sup>Required</sup> <a name="privateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.privateLinkConfiguration"></a>

```typescript
public readonly privateLinkConfiguration: HdinsightHbaseClusterPrivateLinkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference">HdinsightHbaseClusterPrivateLinkConfigurationOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.roles"></a>

```typescript
public readonly roles: HdinsightHbaseClusterRolesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference">HdinsightHbaseClusterRolesOutputReference</a>

---

##### `securityProfile`<sup>Required</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfile"></a>

```typescript
public readonly securityProfile: HdinsightHbaseClusterSecurityProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference">HdinsightHbaseClusterSecurityProfileOutputReference</a>

---

##### `sshEndpoint`<sup>Required</sup> <a name="sshEndpoint" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.sshEndpoint"></a>

```typescript
public readonly sshEndpoint: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccount"></a>

```typescript
public readonly storageAccount: HdinsightHbaseClusterStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList">HdinsightHbaseClusterStorageAccountList</a>

---

##### `storageAccountGen2`<sup>Required</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2"></a>

```typescript
public readonly storageAccountGen2: HdinsightHbaseClusterStorageAccountGen2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference">HdinsightHbaseClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeouts"></a>

```typescript
public readonly timeouts: HdinsightHbaseClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference">HdinsightHbaseClusterTimeoutsOutputReference</a>

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersionInput"></a>

```typescript
public readonly clusterVersionInput: string;
```

- *Type:* string

---

##### `componentVersionInput`<sup>Optional</sup> <a name="componentVersionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersionInput"></a>

```typescript
public readonly componentVersionInput: HdinsightHbaseClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

---

##### `computeIsolationInput`<sup>Optional</sup> <a name="computeIsolationInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolationInput"></a>

```typescript
public readonly computeIsolationInput: HdinsightHbaseClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: IResolvable | HdinsightHbaseClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>[]

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extensionInput"></a>

```typescript
public readonly extensionInput: HdinsightHbaseClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: HdinsightHbaseClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metastoresInput`<sup>Optional</sup> <a name="metastoresInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastoresInput"></a>

```typescript
public readonly metastoresInput: HdinsightHbaseClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitorInput"></a>

```typescript
public readonly monitorInput: HdinsightHbaseClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.networkInput"></a>

```typescript
public readonly networkInput: HdinsightHbaseClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

---

##### `privateLinkConfigurationInput`<sup>Optional</sup> <a name="privateLinkConfigurationInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.privateLinkConfigurationInput"></a>

```typescript
public readonly privateLinkConfigurationInput: HdinsightHbaseClusterPrivateLinkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration">HdinsightHbaseClusterPrivateLinkConfiguration</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.rolesInput"></a>

```typescript
public readonly rolesInput: HdinsightHbaseClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

---

##### `securityProfileInput`<sup>Optional</sup> <a name="securityProfileInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfileInput"></a>

```typescript
public readonly securityProfileInput: HdinsightHbaseClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

---

##### `storageAccountGen2Input`<sup>Optional</sup> <a name="storageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2Input"></a>

```typescript
public readonly storageAccountGen2Input: HdinsightHbaseClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: IResolvable | HdinsightHbaseClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HdinsightHbaseClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightHbaseClusterComponentVersion <a name="HdinsightHbaseClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterComponentVersion: hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.property.hbase">hbase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#hbase HdinsightHbaseCluster#hbase}. |

---

##### `hbase`<sup>Required</sup> <a name="hbase" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.property.hbase"></a>

```typescript
public readonly hbase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#hbase HdinsightHbaseCluster#hbase}.

---

### HdinsightHbaseClusterComputeIsolation <a name="HdinsightHbaseClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterComputeIsolation: hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#compute_isolation_enabled HdinsightHbaseCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.hostSku">hostSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#host_sku HdinsightHbaseCluster#host_sku}. |

---

##### `computeIsolationEnabled`<sup>Optional</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.computeIsolationEnabled"></a>

```typescript
public readonly computeIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#compute_isolation_enabled HdinsightHbaseCluster#compute_isolation_enabled}.

---

##### `hostSku`<sup>Optional</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.hostSku"></a>

```typescript
public readonly hostSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#host_sku HdinsightHbaseCluster#host_sku}.

---

### HdinsightHbaseClusterConfig <a name="HdinsightHbaseClusterConfig" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterConfig: hdinsightHbaseCluster.HdinsightHbaseClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#cluster_version HdinsightHbaseCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#location HdinsightHbaseCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#resource_group_name HdinsightHbaseCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#tier HdinsightHbaseCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.diskEncryption">diskEncryption</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>[]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#id HdinsightHbaseCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.privateLinkConfiguration">privateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration">HdinsightHbaseClusterPrivateLinkConfiguration</a></code> | private_link_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccount">storageAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>[]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#tags HdinsightHbaseCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#tls_min_version HdinsightHbaseCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#cluster_version HdinsightHbaseCluster#cluster_version}.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.componentVersion"></a>

```typescript
public readonly componentVersion: HdinsightHbaseClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#component_version HdinsightHbaseCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.gateway"></a>

```typescript
public readonly gateway: HdinsightHbaseClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#gateway HdinsightHbaseCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#location HdinsightHbaseCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#resource_group_name HdinsightHbaseCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.roles"></a>

```typescript
public readonly roles: HdinsightHbaseClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#roles HdinsightHbaseCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#tier HdinsightHbaseCluster#tier}.

---

##### `computeIsolation`<sup>Optional</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.computeIsolation"></a>

```typescript
public readonly computeIsolation: HdinsightHbaseClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#compute_isolation HdinsightHbaseCluster#compute_isolation}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: IResolvable | HdinsightHbaseClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>[]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#disk_encryption HdinsightHbaseCluster#disk_encryption}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.extension"></a>

```typescript
public readonly extension: HdinsightHbaseClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#extension HdinsightHbaseCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#id HdinsightHbaseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.metastores"></a>

```typescript
public readonly metastores: HdinsightHbaseClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#metastores HdinsightHbaseCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.monitor"></a>

```typescript
public readonly monitor: HdinsightHbaseClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#monitor HdinsightHbaseCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.network"></a>

```typescript
public readonly network: HdinsightHbaseClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#network HdinsightHbaseCluster#network}

---

##### `privateLinkConfiguration`<sup>Optional</sup> <a name="privateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.privateLinkConfiguration"></a>

```typescript
public readonly privateLinkConfiguration: HdinsightHbaseClusterPrivateLinkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration">HdinsightHbaseClusterPrivateLinkConfiguration</a>

private_link_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#private_link_configuration HdinsightHbaseCluster#private_link_configuration}

---

##### `securityProfile`<sup>Optional</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.securityProfile"></a>

```typescript
public readonly securityProfile: HdinsightHbaseClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#security_profile HdinsightHbaseCluster#security_profile}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: IResolvable | HdinsightHbaseClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>[]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_account HdinsightHbaseCluster#storage_account}

---

##### `storageAccountGen2`<sup>Optional</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccountGen2"></a>

```typescript
public readonly storageAccountGen2: HdinsightHbaseClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_account_gen2 HdinsightHbaseCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#tags HdinsightHbaseCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HdinsightHbaseClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#timeouts HdinsightHbaseCluster#timeouts}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#tls_min_version HdinsightHbaseCluster#tls_min_version}.

---

### HdinsightHbaseClusterDiskEncryption <a name="HdinsightHbaseClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterDiskEncryption: hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#encryption_algorithm HdinsightHbaseCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#encryption_at_host_enabled HdinsightHbaseCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#key_vault_key_id HdinsightHbaseCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#key_vault_managed_identity_id HdinsightHbaseCluster#key_vault_managed_identity_id}. |

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#encryption_algorithm HdinsightHbaseCluster#encryption_algorithm}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#encryption_at_host_enabled HdinsightHbaseCluster#encryption_at_host_enabled}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#key_vault_key_id HdinsightHbaseCluster#key_vault_key_id}.

---

##### `keyVaultManagedIdentityId`<sup>Optional</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```typescript
public readonly keyVaultManagedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#key_vault_managed_identity_id HdinsightHbaseCluster#key_vault_managed_identity_id}.

---

### HdinsightHbaseClusterExtension <a name="HdinsightHbaseClusterExtension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterExtension: hdinsightHbaseCluster.HdinsightHbaseClusterExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}.

---

### HdinsightHbaseClusterGateway <a name="HdinsightHbaseClusterGateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterGateway: hdinsightHbaseCluster.HdinsightHbaseClusterGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastores <a name="HdinsightHbaseClusterMetastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterMetastores: hdinsightHbaseCluster.HdinsightHbaseClusterMetastores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.ambari"></a>

```typescript
public readonly ambari: HdinsightHbaseClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ambari HdinsightHbaseCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.hive"></a>

```typescript
public readonly hive: HdinsightHbaseClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#hive HdinsightHbaseCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.oozie"></a>

```typescript
public readonly oozie: HdinsightHbaseClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#oozie HdinsightHbaseCluster#oozie}

---

### HdinsightHbaseClusterMetastoresAmbari <a name="HdinsightHbaseClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterMetastoresAmbari: hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastoresHive <a name="HdinsightHbaseClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterMetastoresHive: hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastoresOozie <a name="HdinsightHbaseClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterMetastoresOozie: hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMonitor <a name="HdinsightHbaseClusterMonitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterMonitor: hdinsightHbaseCluster.HdinsightHbaseClusterMonitor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}.

---

### HdinsightHbaseClusterNetwork <a name="HdinsightHbaseClusterNetwork" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterNetwork: hdinsightHbaseCluster.HdinsightHbaseClusterNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.connectionDirection">connectionDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#connection_direction HdinsightHbaseCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#private_link_enabled HdinsightHbaseCluster#private_link_enabled}. |

---

##### `connectionDirection`<sup>Optional</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.connectionDirection"></a>

```typescript
public readonly connectionDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#connection_direction HdinsightHbaseCluster#connection_direction}.

---

##### `privateLinkEnabled`<sup>Optional</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.privateLinkEnabled"></a>

```typescript
public readonly privateLinkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#private_link_enabled HdinsightHbaseCluster#private_link_enabled}.

---

### HdinsightHbaseClusterPrivateLinkConfiguration <a name="HdinsightHbaseClusterPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterPrivateLinkConfiguration: hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#group_id HdinsightHbaseCluster#group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration">HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#group_id HdinsightHbaseCluster#group_id}.

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration">HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ip_configuration HdinsightHbaseCluster#ip_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

### HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration <a name="HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration: hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#primary HdinsightHbaseCluster#primary}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#private_ip_address HdinsightHbaseCluster#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod">privateIpAllocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#private_ip_allocation_method HdinsightHbaseCluster#private_ip_allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#primary HdinsightHbaseCluster#primary}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#private_ip_address HdinsightHbaseCluster#private_ip_address}.

---

##### `privateIpAllocationMethod`<sup>Optional</sup> <a name="privateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod"></a>

```typescript
public readonly privateIpAllocationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#private_ip_allocation_method HdinsightHbaseCluster#private_ip_allocation_method}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

### HdinsightHbaseClusterRoles <a name="HdinsightHbaseClusterRoles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRoles: hdinsightHbaseCluster.HdinsightHbaseClusterRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | zookeeper_node block. |

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.headNode"></a>

```typescript
public readonly headNode: HdinsightHbaseClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#head_node HdinsightHbaseCluster#head_node}

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.workerNode"></a>

```typescript
public readonly workerNode: HdinsightHbaseClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#worker_node HdinsightHbaseCluster#worker_node}

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.zookeeperNode"></a>

```typescript
public readonly zookeeperNode: HdinsightHbaseClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#zookeeper_node HdinsightHbaseCluster#zookeeper_node}

---

### HdinsightHbaseClusterRolesHeadNode <a name="HdinsightHbaseClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesHeadNode: hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightHbaseClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesHeadNodeScriptActions <a name="HdinsightHbaseClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesHeadNodeScriptActions: hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterRolesWorkerNode <a name="HdinsightHbaseClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesWorkerNode: hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.autoscale"></a>

```typescript
public readonly autoscale: HdinsightHbaseClusterRolesWorkerNodeAutoscale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#autoscale HdinsightHbaseCluster#autoscale}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightHbaseClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscale <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesWorkerNodeAutoscale: hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```typescript
public readonly recurrence: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#recurrence HdinsightHbaseCluster#recurrence}

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence: hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">schedule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#timezone HdinsightHbaseCluster#timezone}. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```typescript
public readonly schedule: IResolvable | HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#schedule HdinsightHbaseCluster#schedule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#timezone HdinsightHbaseCluster#timezone}.

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule: hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">days</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#days HdinsightHbaseCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#time HdinsightHbaseCluster#time}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#days HdinsightHbaseCluster#days}.

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#time HdinsightHbaseCluster#time}.

---

### HdinsightHbaseClusterRolesWorkerNodeScriptActions <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesWorkerNodeScriptActions: hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterRolesZookeeperNode <a name="HdinsightHbaseClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesZookeeperNode: hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightHbaseClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesZookeeperNodeScriptActions <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterRolesZookeeperNodeScriptActions: hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterSecurityProfile <a name="HdinsightHbaseClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterSecurityProfile: hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.aaddsResourceId">aaddsResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#aadds_resource_id HdinsightHbaseCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#domain_name HdinsightHbaseCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUsername">domainUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#domain_username HdinsightHbaseCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUserPassword">domainUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#domain_user_password HdinsightHbaseCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.ldapsUrls">ldapsUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ldaps_urls HdinsightHbaseCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.msiResourceId">msiResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#msi_resource_id HdinsightHbaseCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#cluster_users_group_dns HdinsightHbaseCluster#cluster_users_group_dns}. |

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.aaddsResourceId"></a>

```typescript
public readonly aaddsResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#aadds_resource_id HdinsightHbaseCluster#aadds_resource_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#domain_name HdinsightHbaseCluster#domain_name}.

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUsername"></a>

```typescript
public readonly domainUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#domain_username HdinsightHbaseCluster#domain_username}.

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUserPassword"></a>

```typescript
public readonly domainUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#domain_user_password HdinsightHbaseCluster#domain_user_password}.

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.ldapsUrls"></a>

```typescript
public readonly ldapsUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#ldaps_urls HdinsightHbaseCluster#ldaps_urls}.

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.msiResourceId"></a>

```typescript
public readonly msiResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#msi_resource_id HdinsightHbaseCluster#msi_resource_id}.

---

##### `clusterUsersGroupDns`<sup>Optional</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```typescript
public readonly clusterUsersGroupDns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#cluster_users_group_dns HdinsightHbaseCluster#cluster_users_group_dns}.

---

### HdinsightHbaseClusterStorageAccount <a name="HdinsightHbaseClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterStorageAccount: hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_account_key HdinsightHbaseCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_container_id HdinsightHbaseCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}. |

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_account_key HdinsightHbaseCluster#storage_account_key}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_container_id HdinsightHbaseCluster#storage_container_id}.

---

##### `storageResourceId`<sup>Optional</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}.

---

### HdinsightHbaseClusterStorageAccountGen2 <a name="HdinsightHbaseClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterStorageAccountGen2: hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.filesystemId">filesystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#filesystem_id HdinsightHbaseCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#managed_identity_resource_id HdinsightHbaseCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}. |

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.filesystemId"></a>

```typescript
public readonly filesystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#filesystem_id HdinsightHbaseCluster#filesystem_id}.

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}.

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```typescript
public readonly managedIdentityResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#managed_identity_resource_id HdinsightHbaseCluster#managed_identity_resource_id}.

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}.

---

### HdinsightHbaseClusterTimeouts <a name="HdinsightHbaseClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

const hdinsightHbaseClusterTimeouts: hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#create HdinsightHbaseCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#delete HdinsightHbaseCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#read HdinsightHbaseCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#update HdinsightHbaseCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#create HdinsightHbaseCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#delete HdinsightHbaseCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#read HdinsightHbaseCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/hdinsight_hbase_cluster#update HdinsightHbaseCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightHbaseClusterComponentVersionOutputReference <a name="HdinsightHbaseClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbaseInput">hbaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbase">hbase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hbaseInput`<sup>Optional</sup> <a name="hbaseInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbaseInput"></a>

```typescript
public readonly hbaseInput: string;
```

- *Type:* string

---

##### `hbase`<sup>Required</sup> <a name="hbase" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbase"></a>

```typescript
public readonly hbase: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

---


### HdinsightHbaseClusterComputeIsolationOutputReference <a name="HdinsightHbaseClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">resetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetHostSku">resetHostSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeIsolationEnabled` <a name="resetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```typescript
public resetComputeIsolationEnabled(): void
```

##### `resetHostSku` <a name="resetHostSku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetHostSku"></a>

```typescript
public resetHostSku(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">computeIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSkuInput">hostSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSku">hostSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeIsolationEnabledInput`<sup>Optional</sup> <a name="computeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```typescript
public readonly computeIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSkuInput`<sup>Optional</sup> <a name="hostSkuInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```typescript
public readonly hostSkuInput: string;
```

- *Type:* string

---

##### `computeIsolationEnabled`<sup>Required</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```typescript
public readonly computeIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSku`<sup>Required</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSku"></a>

```typescript
public readonly hostSku: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

---


### HdinsightHbaseClusterDiskEncryptionList <a name="HdinsightHbaseClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get"></a>

```typescript
public get(index: number): HdinsightHbaseClusterDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>[]

---


### HdinsightHbaseClusterDiskEncryptionOutputReference <a name="HdinsightHbaseClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">resetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```typescript
public resetEncryptionAtHostEnabled(): void
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```typescript
public resetKeyVaultKeyId(): void
```

##### `resetKeyVaultManagedIdentityId` <a name="resetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```typescript
public resetKeyVaultManagedIdentityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">keyVaultManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```typescript
public readonly encryptionAtHostEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `keyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="keyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```typescript
public readonly keyVaultManagedIdentityIdInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `keyVaultManagedIdentityId`<sup>Required</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```typescript
public readonly keyVaultManagedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterDiskEncryption;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>

---


### HdinsightHbaseClusterExtensionOutputReference <a name="HdinsightHbaseClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

---


### HdinsightHbaseClusterGatewayOutputReference <a name="HdinsightHbaseClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

---


### HdinsightHbaseClusterMetastoresAmbariOutputReference <a name="HdinsightHbaseClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

---


### HdinsightHbaseClusterMetastoresHiveOutputReference <a name="HdinsightHbaseClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

---


### HdinsightHbaseClusterMetastoresOozieOutputReference <a name="HdinsightHbaseClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

---


### HdinsightHbaseClusterMetastoresOutputReference <a name="HdinsightHbaseClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari">putAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive">putHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie">putOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetAmbari">resetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetHive">resetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetOozie">resetOozie</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmbari` <a name="putAmbari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari"></a>

```typescript
public putAmbari(value: HdinsightHbaseClusterMetastoresAmbari): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

---

##### `putHive` <a name="putHive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive"></a>

```typescript
public putHive(value: HdinsightHbaseClusterMetastoresHive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

---

##### `putOozie` <a name="putOozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie"></a>

```typescript
public putOozie(value: HdinsightHbaseClusterMetastoresOozie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

---

##### `resetAmbari` <a name="resetAmbari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetAmbari"></a>

```typescript
public resetAmbari(): void
```

##### `resetHive` <a name="resetHive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetHive"></a>

```typescript
public resetHive(): void
```

##### `resetOozie` <a name="resetOozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetOozie"></a>

```typescript
public resetOozie(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference">HdinsightHbaseClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference">HdinsightHbaseClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference">HdinsightHbaseClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambariInput">ambariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hiveInput">hiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozieInput">oozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambari"></a>

```typescript
public readonly ambari: HdinsightHbaseClusterMetastoresAmbariOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference">HdinsightHbaseClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hive"></a>

```typescript
public readonly hive: HdinsightHbaseClusterMetastoresHiveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference">HdinsightHbaseClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozie"></a>

```typescript
public readonly oozie: HdinsightHbaseClusterMetastoresOozieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference">HdinsightHbaseClusterMetastoresOozieOutputReference</a>

---

##### `ambariInput`<sup>Optional</sup> <a name="ambariInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambariInput"></a>

```typescript
public readonly ambariInput: HdinsightHbaseClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

---

##### `hiveInput`<sup>Optional</sup> <a name="hiveInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hiveInput"></a>

```typescript
public readonly hiveInput: HdinsightHbaseClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

---

##### `oozieInput`<sup>Optional</sup> <a name="oozieInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozieInput"></a>

```typescript
public readonly oozieInput: HdinsightHbaseClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

---


### HdinsightHbaseClusterMonitorOutputReference <a name="HdinsightHbaseClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

---


### HdinsightHbaseClusterNetworkOutputReference <a name="HdinsightHbaseClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetConnectionDirection">resetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetPrivateLinkEnabled">resetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionDirection` <a name="resetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetConnectionDirection"></a>

```typescript
public resetConnectionDirection(): void
```

##### `resetPrivateLinkEnabled` <a name="resetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```typescript
public resetPrivateLinkEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirectionInput">connectionDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabledInput">privateLinkEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirection">connectionDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionDirectionInput`<sup>Optional</sup> <a name="connectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```typescript
public readonly connectionDirectionInput: string;
```

- *Type:* string

---

##### `privateLinkEnabledInput`<sup>Optional</sup> <a name="privateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```typescript
public readonly privateLinkEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionDirection`<sup>Required</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirection"></a>

```typescript
public readonly connectionDirection: string;
```

- *Type:* string

---

##### `privateLinkEnabled`<sup>Required</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```typescript
public readonly privateLinkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

---


### HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference <a name="HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod">resetPrivateIpAllocationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetPrivateIpAllocationMethod` <a name="resetPrivateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod"></a>

```typescript
public resetPrivateIpAllocationMethod(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput">privateIpAllocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod">privateIpAllocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration">HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `privateIpAllocationMethodInput`<sup>Optional</sup> <a name="privateIpAllocationMethodInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput"></a>

```typescript
public readonly privateIpAllocationMethodInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAllocationMethod`<sup>Required</sup> <a name="privateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod"></a>

```typescript
public readonly privateIpAllocationMethod: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration">HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration</a>

---


### HdinsightHbaseClusterPrivateLinkConfigurationOutputReference <a name="HdinsightHbaseClusterPrivateLinkConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.putIpConfiguration">putIpConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpConfiguration` <a name="putIpConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.putIpConfiguration"></a>

```typescript
public putIpConfiguration(value: HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration">HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration">HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration">HdinsightHbaseClusterPrivateLinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightHbaseClusterPrivateLinkConfigurationIpConfigurationOutputReference</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration">HdinsightHbaseClusterPrivateLinkConfigurationIpConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterPrivateLinkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterPrivateLinkConfiguration">HdinsightHbaseClusterPrivateLinkConfiguration</a>

---


### HdinsightHbaseClusterRolesHeadNodeOutputReference <a name="HdinsightHbaseClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightHbaseClusterRolesHeadNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>[]

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList">HdinsightHbaseClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightHbaseClusterRolesHeadNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList">HdinsightHbaseClusterRolesHeadNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightHbaseClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

---


### HdinsightHbaseClusterRolesHeadNodeScriptActionsList <a name="HdinsightHbaseClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>[]

---


### HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterRolesHeadNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>

---


### HdinsightHbaseClusterRolesOutputReference <a name="HdinsightHbaseClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode">putHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode">putWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode">putZookeeperNode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeadNode` <a name="putHeadNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode"></a>

```typescript
public putHeadNode(value: HdinsightHbaseClusterRolesHeadNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

---

##### `putWorkerNode` <a name="putWorkerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode"></a>

```typescript
public putWorkerNode(value: HdinsightHbaseClusterRolesWorkerNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

---

##### `putZookeeperNode` <a name="putZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode"></a>

```typescript
public putZookeeperNode(value: HdinsightHbaseClusterRolesZookeeperNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference">HdinsightHbaseClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference">HdinsightHbaseClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference">HdinsightHbaseClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNodeInput">headNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNodeInput">workerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNodeInput">zookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNode"></a>

```typescript
public readonly headNode: HdinsightHbaseClusterRolesHeadNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference">HdinsightHbaseClusterRolesHeadNodeOutputReference</a>

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNode"></a>

```typescript
public readonly workerNode: HdinsightHbaseClusterRolesWorkerNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference">HdinsightHbaseClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNode"></a>

```typescript
public readonly zookeeperNode: HdinsightHbaseClusterRolesZookeeperNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference">HdinsightHbaseClusterRolesZookeeperNodeOutputReference</a>

---

##### `headNodeInput`<sup>Optional</sup> <a name="headNodeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNodeInput"></a>

```typescript
public readonly headNodeInput: HdinsightHbaseClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

---

##### `workerNodeInput`<sup>Optional</sup> <a name="workerNodeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNodeInput"></a>

```typescript
public readonly workerNodeInput: HdinsightHbaseClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

---

##### `zookeeperNodeInput`<sup>Optional</sup> <a name="zookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```typescript
public readonly zookeeperNodeInput: HdinsightHbaseClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```typescript
public putRecurrence(value: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterRolesWorkerNodeAutoscale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">putSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: IResolvable | HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```typescript
public readonly schedule: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```typescript
public get(index: number): HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">daysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">targetInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: string[];
```

- *Type:* string[]

---

##### `targetInstanceCountInput`<sup>Optional</sup> <a name="targetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```typescript
public readonly targetInstanceCountInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>

---


### HdinsightHbaseClusterRolesWorkerNodeOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale">putAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetAutoscale">resetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscale` <a name="putAutoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```typescript
public putAutoscale(value: HdinsightHbaseClusterRolesWorkerNodeAutoscale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

---

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightHbaseClusterRolesWorkerNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>[]

---

##### `resetAutoscale` <a name="resetAutoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```typescript
public resetAutoscale(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList">HdinsightHbaseClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscaleInput">autoscaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">targetInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```typescript
public readonly autoscale: HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightHbaseClusterRolesWorkerNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList">HdinsightHbaseClusterRolesWorkerNodeScriptActionsList</a>

---

##### `autoscaleInput`<sup>Optional</sup> <a name="autoscaleInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```typescript
public readonly autoscaleInput: HdinsightHbaseClusterRolesWorkerNodeAutoscale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightHbaseClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `targetInstanceCountInput`<sup>Optional</sup> <a name="targetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```typescript
public readonly targetInstanceCountInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

---


### HdinsightHbaseClusterRolesWorkerNodeScriptActionsList <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>[]

---


### HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterRolesWorkerNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>

---


### HdinsightHbaseClusterRolesZookeeperNodeOutputReference <a name="HdinsightHbaseClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightHbaseClusterRolesZookeeperNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>[]

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList">HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList">HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightHbaseClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

---


### HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>[]

---


### HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterRolesZookeeperNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>

---


### HdinsightHbaseClusterSecurityProfileOutputReference <a name="HdinsightHbaseClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">resetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterUsersGroupDns` <a name="resetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```typescript
public resetClusterUsersGroupDns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aaddsResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">clusterUsersGroupDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsernameInput">domainUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domainUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldapsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceIdInput">msiResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceId">aaddsResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsername">domainUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPassword">domainUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrls">ldapsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceId">msiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aaddsResourceIdInput`<sup>Optional</sup> <a name="aaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```typescript
public readonly aaddsResourceIdInput: string;
```

- *Type:* string

---

##### `clusterUsersGroupDnsInput`<sup>Optional</sup> <a name="clusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```typescript
public readonly clusterUsersGroupDnsInput: string[];
```

- *Type:* string[]

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainUsernameInput`<sup>Optional</sup> <a name="domainUsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```typescript
public readonly domainUsernameInput: string;
```

- *Type:* string

---

##### `domainUserPasswordInput`<sup>Optional</sup> <a name="domainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```typescript
public readonly domainUserPasswordInput: string;
```

- *Type:* string

---

##### `ldapsUrlsInput`<sup>Optional</sup> <a name="ldapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```typescript
public readonly ldapsUrlsInput: string[];
```

- *Type:* string[]

---

##### `msiResourceIdInput`<sup>Optional</sup> <a name="msiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```typescript
public readonly msiResourceIdInput: string;
```

- *Type:* string

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```typescript
public readonly aaddsResourceId: string;
```

- *Type:* string

---

##### `clusterUsersGroupDns`<sup>Required</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```typescript
public readonly clusterUsersGroupDns: string[];
```

- *Type:* string[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsername"></a>

```typescript
public readonly domainUsername: string;
```

- *Type:* string

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```typescript
public readonly domainUserPassword: string;
```

- *Type:* string

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```typescript
public readonly ldapsUrls: string[];
```

- *Type:* string[]

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```typescript
public readonly msiResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

---


### HdinsightHbaseClusterStorageAccountGen2OutputReference <a name="HdinsightHbaseClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managedIdentityResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemId">filesystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesystemIdInput`<sup>Optional</sup> <a name="filesystemIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```typescript
public readonly filesystemIdInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedIdentityResourceIdInput`<sup>Optional</sup> <a name="managedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```typescript
public readonly managedIdentityResourceIdInput: string;
```

- *Type:* string

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```typescript
public readonly storageResourceIdInput: string;
```

- *Type:* string

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```typescript
public readonly filesystemId: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```typescript
public readonly managedIdentityResourceId: string;
```

- *Type:* string

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightHbaseClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

---


### HdinsightHbaseClusterStorageAccountList <a name="HdinsightHbaseClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get"></a>

```typescript
public get(index: number): HdinsightHbaseClusterStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>[]

---


### HdinsightHbaseClusterStorageAccountOutputReference <a name="HdinsightHbaseClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resetStorageResourceId">resetStorageResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageResourceId` <a name="resetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```typescript
public resetStorageResourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```typescript
public readonly storageAccountKeyInput: string;
```

- *Type:* string

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```typescript
public readonly storageContainerIdInput: string;
```

- *Type:* string

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```typescript
public readonly storageResourceIdInput: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterStorageAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>

---


### HdinsightHbaseClusterTimeoutsOutputReference <a name="HdinsightHbaseClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { hdinsightHbaseCluster } from '@cdktf/provider-azurerm'

new hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightHbaseClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>

---



