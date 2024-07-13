# `hdinsightInteractiveQueryCluster` Submodule <a name="`hdinsightInteractiveQueryCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightInteractiveQueryCluster <a name="HdinsightInteractiveQueryCluster" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster azurerm_hdinsight_interactive_query_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster(scope: Construct, id: string, config: HdinsightInteractiveQueryClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig">HdinsightInteractiveQueryClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig">HdinsightInteractiveQueryClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion">putComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation">putComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption">putDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway">putGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores">putMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration">putPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile">putSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2">putStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetComputeIsolation">resetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetEncryptionInTransitEnabled">resetEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMetastores">resetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetPrivateLinkConfiguration">resetPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetSecurityProfile">resetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccountGen2">resetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentVersion` <a name="putComponentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion"></a>

```typescript
public putComponentVersion(value: HdinsightInteractiveQueryClusterComponentVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---

##### `putComputeIsolation` <a name="putComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation"></a>

```typescript
public putComputeIsolation(value: HdinsightInteractiveQueryClusterComputeIsolation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---

##### `putDiskEncryption` <a name="putDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption"></a>

```typescript
public putDiskEncryption(value: IResolvable | HdinsightInteractiveQueryClusterDiskEncryption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>[]

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension"></a>

```typescript
public putExtension(value: HdinsightInteractiveQueryClusterExtension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---

##### `putGateway` <a name="putGateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway"></a>

```typescript
public putGateway(value: HdinsightInteractiveQueryClusterGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---

##### `putMetastores` <a name="putMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores"></a>

```typescript
public putMetastores(value: HdinsightInteractiveQueryClusterMetastores): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor"></a>

```typescript
public putMonitor(value: HdinsightInteractiveQueryClusterMonitor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork"></a>

```typescript
public putNetwork(value: HdinsightInteractiveQueryClusterNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---

##### `putPrivateLinkConfiguration` <a name="putPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration"></a>

```typescript
public putPrivateLinkConfiguration(value: HdinsightInteractiveQueryClusterPrivateLinkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---

##### `putRoles` <a name="putRoles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles"></a>

```typescript
public putRoles(value: HdinsightInteractiveQueryClusterRoles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---

##### `putSecurityProfile` <a name="putSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile"></a>

```typescript
public putSecurityProfile(value: HdinsightInteractiveQueryClusterSecurityProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount"></a>

```typescript
public putStorageAccount(value: IResolvable | HdinsightInteractiveQueryClusterStorageAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>[]

---

##### `putStorageAccountGen2` <a name="putStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2"></a>

```typescript
public putStorageAccountGen2(value: HdinsightInteractiveQueryClusterStorageAccountGen2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: HdinsightInteractiveQueryClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

---

##### `resetComputeIsolation` <a name="resetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetComputeIsolation"></a>

```typescript
public resetComputeIsolation(): void
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetEncryptionInTransitEnabled` <a name="resetEncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetEncryptionInTransitEnabled"></a>

```typescript
public resetEncryptionInTransitEnabled(): void
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetastores` <a name="resetMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMetastores"></a>

```typescript
public resetMetastores(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPrivateLinkConfiguration` <a name="resetPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetPrivateLinkConfiguration"></a>

```typescript
public resetPrivateLinkConfiguration(): void
```

##### `resetSecurityProfile` <a name="resetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetSecurityProfile"></a>

```typescript
public resetSecurityProfile(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetStorageAccountGen2` <a name="resetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccountGen2"></a>

```typescript
public resetStorageAccountGen2(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HdinsightInteractiveQueryCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HdinsightInteractiveQueryCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HdinsightInteractiveQueryCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HdinsightInteractiveQueryCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightInteractiveQueryCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference">HdinsightInteractiveQueryClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference">HdinsightInteractiveQueryClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryption">diskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList">HdinsightInteractiveQueryClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference">HdinsightInteractiveQueryClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference">HdinsightInteractiveQueryClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.httpsEndpoint">httpsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference">HdinsightInteractiveQueryClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference">HdinsightInteractiveQueryClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference">HdinsightInteractiveQueryClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfiguration">privateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference">HdinsightInteractiveQueryClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference">HdinsightInteractiveQueryClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.sshEndpoint">sshEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList">HdinsightInteractiveQueryClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference">HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference">HdinsightInteractiveQueryClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersionInput">componentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolationInput">computeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabledInput">encryptionInTransitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extensionInput">extensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gatewayInput">gatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastoresInput">metastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitorInput">monitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfigurationInput">privateLinkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.rolesInput">rolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfileInput">securityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2Input">storageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountInput">storageAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersion"></a>

```typescript
public readonly componentVersion: HdinsightInteractiveQueryClusterComponentVersionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference">HdinsightInteractiveQueryClusterComponentVersionOutputReference</a>

---

##### `computeIsolation`<sup>Required</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolation"></a>

```typescript
public readonly computeIsolation: HdinsightInteractiveQueryClusterComputeIsolationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference">HdinsightInteractiveQueryClusterComputeIsolationOutputReference</a>

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: HdinsightInteractiveQueryClusterDiskEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList">HdinsightInteractiveQueryClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extension"></a>

```typescript
public readonly extension: HdinsightInteractiveQueryClusterExtensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference">HdinsightInteractiveQueryClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gateway"></a>

```typescript
public readonly gateway: HdinsightInteractiveQueryClusterGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference">HdinsightInteractiveQueryClusterGatewayOutputReference</a>

---

##### `httpsEndpoint`<sup>Required</sup> <a name="httpsEndpoint" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.httpsEndpoint"></a>

```typescript
public readonly httpsEndpoint: string;
```

- *Type:* string

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastores"></a>

```typescript
public readonly metastores: HdinsightInteractiveQueryClusterMetastoresOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference">HdinsightInteractiveQueryClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitor"></a>

```typescript
public readonly monitor: HdinsightInteractiveQueryClusterMonitorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference">HdinsightInteractiveQueryClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.network"></a>

```typescript
public readonly network: HdinsightInteractiveQueryClusterNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference">HdinsightInteractiveQueryClusterNetworkOutputReference</a>

---

##### `privateLinkConfiguration`<sup>Required</sup> <a name="privateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfiguration"></a>

```typescript
public readonly privateLinkConfiguration: HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.roles"></a>

```typescript
public readonly roles: HdinsightInteractiveQueryClusterRolesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference">HdinsightInteractiveQueryClusterRolesOutputReference</a>

---

##### `securityProfile`<sup>Required</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfile"></a>

```typescript
public readonly securityProfile: HdinsightInteractiveQueryClusterSecurityProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference">HdinsightInteractiveQueryClusterSecurityProfileOutputReference</a>

---

##### `sshEndpoint`<sup>Required</sup> <a name="sshEndpoint" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.sshEndpoint"></a>

```typescript
public readonly sshEndpoint: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccount"></a>

```typescript
public readonly storageAccount: HdinsightInteractiveQueryClusterStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList">HdinsightInteractiveQueryClusterStorageAccountList</a>

---

##### `storageAccountGen2`<sup>Required</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2"></a>

```typescript
public readonly storageAccountGen2: HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference">HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeouts"></a>

```typescript
public readonly timeouts: HdinsightInteractiveQueryClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference">HdinsightInteractiveQueryClusterTimeoutsOutputReference</a>

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersionInput"></a>

```typescript
public readonly clusterVersionInput: string;
```

- *Type:* string

---

##### `componentVersionInput`<sup>Optional</sup> <a name="componentVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersionInput"></a>

```typescript
public readonly componentVersionInput: HdinsightInteractiveQueryClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---

##### `computeIsolationInput`<sup>Optional</sup> <a name="computeIsolationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolationInput"></a>

```typescript
public readonly computeIsolationInput: HdinsightInteractiveQueryClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: IResolvable | HdinsightInteractiveQueryClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>[]

---

##### `encryptionInTransitEnabledInput`<sup>Optional</sup> <a name="encryptionInTransitEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabledInput"></a>

```typescript
public readonly encryptionInTransitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extensionInput"></a>

```typescript
public readonly extensionInput: HdinsightInteractiveQueryClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: HdinsightInteractiveQueryClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metastoresInput`<sup>Optional</sup> <a name="metastoresInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastoresInput"></a>

```typescript
public readonly metastoresInput: HdinsightInteractiveQueryClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitorInput"></a>

```typescript
public readonly monitorInput: HdinsightInteractiveQueryClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.networkInput"></a>

```typescript
public readonly networkInput: HdinsightInteractiveQueryClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---

##### `privateLinkConfigurationInput`<sup>Optional</sup> <a name="privateLinkConfigurationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfigurationInput"></a>

```typescript
public readonly privateLinkConfigurationInput: HdinsightInteractiveQueryClusterPrivateLinkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.rolesInput"></a>

```typescript
public readonly rolesInput: HdinsightInteractiveQueryClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---

##### `securityProfileInput`<sup>Optional</sup> <a name="securityProfileInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfileInput"></a>

```typescript
public readonly securityProfileInput: HdinsightInteractiveQueryClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---

##### `storageAccountGen2Input`<sup>Optional</sup> <a name="storageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2Input"></a>

```typescript
public readonly storageAccountGen2Input: HdinsightInteractiveQueryClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: IResolvable | HdinsightInteractiveQueryClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HdinsightInteractiveQueryClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `encryptionInTransitEnabled`<sup>Required</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabled"></a>

```typescript
public readonly encryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightInteractiveQueryClusterComponentVersion <a name="HdinsightInteractiveQueryClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterComponentVersion: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.property.interactiveHive">interactiveHive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#interactive_hive HdinsightInteractiveQueryCluster#interactive_hive}. |

---

##### `interactiveHive`<sup>Required</sup> <a name="interactiveHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.property.interactiveHive"></a>

```typescript
public readonly interactiveHive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#interactive_hive HdinsightInteractiveQueryCluster#interactive_hive}.

---

### HdinsightInteractiveQueryClusterComputeIsolation <a name="HdinsightInteractiveQueryClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterComputeIsolation: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation_enabled HdinsightInteractiveQueryCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.hostSku">hostSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#host_sku HdinsightInteractiveQueryCluster#host_sku}. |

---

##### `computeIsolationEnabled`<sup>Optional</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.computeIsolationEnabled"></a>

```typescript
public readonly computeIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation_enabled HdinsightInteractiveQueryCluster#compute_isolation_enabled}.

---

##### `hostSku`<sup>Optional</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.hostSku"></a>

```typescript
public readonly hostSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#host_sku HdinsightInteractiveQueryCluster#host_sku}.

---

### HdinsightInteractiveQueryClusterConfig <a name="HdinsightInteractiveQueryClusterConfig" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterConfig: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.diskEncryption">diskEncryption</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>[]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#id HdinsightInteractiveQueryCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.privateLinkConfiguration">privateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | private_link_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccount">storageAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>[]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.componentVersion"></a>

```typescript
public readonly componentVersion: HdinsightInteractiveQueryClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#component_version HdinsightInteractiveQueryCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.gateway"></a>

```typescript
public readonly gateway: HdinsightInteractiveQueryClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#gateway HdinsightInteractiveQueryCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.roles"></a>

```typescript
public readonly roles: HdinsightInteractiveQueryClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#roles HdinsightInteractiveQueryCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}.

---

##### `computeIsolation`<sup>Optional</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.computeIsolation"></a>

```typescript
public readonly computeIsolation: HdinsightInteractiveQueryClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation HdinsightInteractiveQueryCluster#compute_isolation}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: IResolvable | HdinsightInteractiveQueryClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>[]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#disk_encryption HdinsightInteractiveQueryCluster#disk_encryption}

---

##### `encryptionInTransitEnabled`<sup>Optional</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.encryptionInTransitEnabled"></a>

```typescript
public readonly encryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.extension"></a>

```typescript
public readonly extension: HdinsightInteractiveQueryClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#extension HdinsightInteractiveQueryCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#id HdinsightInteractiveQueryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.metastores"></a>

```typescript
public readonly metastores: HdinsightInteractiveQueryClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#metastores HdinsightInteractiveQueryCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.monitor"></a>

```typescript
public readonly monitor: HdinsightInteractiveQueryClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#monitor HdinsightInteractiveQueryCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.network"></a>

```typescript
public readonly network: HdinsightInteractiveQueryClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#network HdinsightInteractiveQueryCluster#network}

---

##### `privateLinkConfiguration`<sup>Optional</sup> <a name="privateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.privateLinkConfiguration"></a>

```typescript
public readonly privateLinkConfiguration: HdinsightInteractiveQueryClusterPrivateLinkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

private_link_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#private_link_configuration HdinsightInteractiveQueryCluster#private_link_configuration}

---

##### `securityProfile`<sup>Optional</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.securityProfile"></a>

```typescript
public readonly securityProfile: HdinsightInteractiveQueryClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#security_profile HdinsightInteractiveQueryCluster#security_profile}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: IResolvable | HdinsightInteractiveQueryClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>[]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_account HdinsightInteractiveQueryCluster#storage_account}

---

##### `storageAccountGen2`<sup>Optional</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccountGen2"></a>

```typescript
public readonly storageAccountGen2: HdinsightInteractiveQueryClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_gen2 HdinsightInteractiveQueryCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HdinsightInteractiveQueryClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#timeouts HdinsightInteractiveQueryCluster#timeouts}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}.

---

### HdinsightInteractiveQueryClusterDiskEncryption <a name="HdinsightInteractiveQueryClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterDiskEncryption: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#encryption_algorithm HdinsightInteractiveQueryCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#encryption_at_host_enabled HdinsightInteractiveQueryCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_key_id HdinsightInteractiveQueryCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_managed_identity_id HdinsightInteractiveQueryCluster#key_vault_managed_identity_id}. |

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#encryption_algorithm HdinsightInteractiveQueryCluster#encryption_algorithm}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#encryption_at_host_enabled HdinsightInteractiveQueryCluster#encryption_at_host_enabled}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_key_id HdinsightInteractiveQueryCluster#key_vault_key_id}.

---

##### `keyVaultManagedIdentityId`<sup>Optional</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```typescript
public readonly keyVaultManagedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_managed_identity_id HdinsightInteractiveQueryCluster#key_vault_managed_identity_id}.

---

### HdinsightInteractiveQueryClusterExtension <a name="HdinsightInteractiveQueryClusterExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterExtension: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}.

---

### HdinsightInteractiveQueryClusterGateway <a name="HdinsightInteractiveQueryClusterGateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterGateway: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastores <a name="HdinsightInteractiveQueryClusterMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterMetastores: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.ambari"></a>

```typescript
public readonly ambari: HdinsightInteractiveQueryClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ambari HdinsightInteractiveQueryCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.hive"></a>

```typescript
public readonly hive: HdinsightInteractiveQueryClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#hive HdinsightInteractiveQueryCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.oozie"></a>

```typescript
public readonly oozie: HdinsightInteractiveQueryClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#oozie HdinsightInteractiveQueryCluster#oozie}

---

### HdinsightInteractiveQueryClusterMetastoresAmbari <a name="HdinsightInteractiveQueryClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterMetastoresAmbari: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastoresHive <a name="HdinsightInteractiveQueryClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterMetastoresHive: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastoresOozie <a name="HdinsightInteractiveQueryClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterMetastoresOozie: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMonitor <a name="HdinsightInteractiveQueryClusterMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterMonitor: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}.

---

### HdinsightInteractiveQueryClusterNetwork <a name="HdinsightInteractiveQueryClusterNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterNetwork: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.connectionDirection">connectionDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#connection_direction HdinsightInteractiveQueryCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#private_link_enabled HdinsightInteractiveQueryCluster#private_link_enabled}. |

---

##### `connectionDirection`<sup>Optional</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.connectionDirection"></a>

```typescript
public readonly connectionDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#connection_direction HdinsightInteractiveQueryCluster#connection_direction}.

---

##### `privateLinkEnabled`<sup>Optional</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.privateLinkEnabled"></a>

```typescript
public readonly privateLinkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#private_link_enabled HdinsightInteractiveQueryCluster#private_link_enabled}.

---

### HdinsightInteractiveQueryClusterPrivateLinkConfiguration <a name="HdinsightInteractiveQueryClusterPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterPrivateLinkConfiguration: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#group_id HdinsightInteractiveQueryCluster#group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#group_id HdinsightInteractiveQueryCluster#group_id}.

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ip_configuration HdinsightInteractiveQueryCluster#ip_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

### HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#primary HdinsightInteractiveQueryCluster#primary}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_address HdinsightInteractiveQueryCluster#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod">privateIpAllocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_allocation_method HdinsightInteractiveQueryCluster#private_ip_allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#primary HdinsightInteractiveQueryCluster#primary}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_address HdinsightInteractiveQueryCluster#private_ip_address}.

---

##### `privateIpAllocationMethod`<sup>Optional</sup> <a name="privateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod"></a>

```typescript
public readonly privateIpAllocationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_allocation_method HdinsightInteractiveQueryCluster#private_ip_allocation_method}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

### HdinsightInteractiveQueryClusterRoles <a name="HdinsightInteractiveQueryClusterRoles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRoles: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | zookeeper_node block. |

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.headNode"></a>

```typescript
public readonly headNode: HdinsightInteractiveQueryClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#head_node HdinsightInteractiveQueryCluster#head_node}

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.workerNode"></a>

```typescript
public readonly workerNode: HdinsightInteractiveQueryClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#worker_node HdinsightInteractiveQueryCluster#worker_node}

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.zookeeperNode"></a>

```typescript
public readonly zookeeperNode: HdinsightInteractiveQueryClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#zookeeper_node HdinsightInteractiveQueryCluster#zookeeper_node}

---

### HdinsightInteractiveQueryClusterRolesHeadNode <a name="HdinsightInteractiveQueryClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesHeadNode: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesHeadNodeScriptActions: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNode <a name="HdinsightInteractiveQueryClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesWorkerNode: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.autoscale"></a>

```typescript
public readonly autoscale: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#autoscale HdinsightInteractiveQueryCluster#autoscale}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.property.capacity"></a>

```typescript
public readonly capacity: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#capacity HdinsightInteractiveQueryCluster#capacity}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```typescript
public readonly recurrence: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#recurrence HdinsightInteractiveQueryCluster#recurrence}

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#max_instance_count HdinsightInteractiveQueryCluster#max_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#min_instance_count HdinsightInteractiveQueryCluster#min_instance_count}. |

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#max_instance_count HdinsightInteractiveQueryCluster#max_instance_count}.

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#min_instance_count HdinsightInteractiveQueryCluster#min_instance_count}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">schedule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#timezone HdinsightInteractiveQueryCluster#timezone}. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```typescript
public readonly schedule: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#schedule HdinsightInteractiveQueryCluster#schedule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#timezone HdinsightInteractiveQueryCluster#timezone}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">days</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#days HdinsightInteractiveQueryCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#time HdinsightInteractiveQueryCluster#time}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#days HdinsightInteractiveQueryCluster#days}.

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#time HdinsightInteractiveQueryCluster#time}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterRolesZookeeperNode <a name="HdinsightInteractiveQueryClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesZookeeperNode: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterSecurityProfile <a name="HdinsightInteractiveQueryClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterSecurityProfile: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.aaddsResourceId">aaddsResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#aadds_resource_id HdinsightInteractiveQueryCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#domain_name HdinsightInteractiveQueryCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUsername">domainUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#domain_username HdinsightInteractiveQueryCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUserPassword">domainUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#domain_user_password HdinsightInteractiveQueryCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.ldapsUrls">ldapsUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ldaps_urls HdinsightInteractiveQueryCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.msiResourceId">msiResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#msi_resource_id HdinsightInteractiveQueryCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#cluster_users_group_dns HdinsightInteractiveQueryCluster#cluster_users_group_dns}. |

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.aaddsResourceId"></a>

```typescript
public readonly aaddsResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#aadds_resource_id HdinsightInteractiveQueryCluster#aadds_resource_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#domain_name HdinsightInteractiveQueryCluster#domain_name}.

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUsername"></a>

```typescript
public readonly domainUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#domain_username HdinsightInteractiveQueryCluster#domain_username}.

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUserPassword"></a>

```typescript
public readonly domainUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#domain_user_password HdinsightInteractiveQueryCluster#domain_user_password}.

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.ldapsUrls"></a>

```typescript
public readonly ldapsUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#ldaps_urls HdinsightInteractiveQueryCluster#ldaps_urls}.

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.msiResourceId"></a>

```typescript
public readonly msiResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#msi_resource_id HdinsightInteractiveQueryCluster#msi_resource_id}.

---

##### `clusterUsersGroupDns`<sup>Optional</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```typescript
public readonly clusterUsersGroupDns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#cluster_users_group_dns HdinsightInteractiveQueryCluster#cluster_users_group_dns}.

---

### HdinsightInteractiveQueryClusterStorageAccount <a name="HdinsightInteractiveQueryClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterStorageAccount: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_key HdinsightInteractiveQueryCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_container_id HdinsightInteractiveQueryCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}. |

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_key HdinsightInteractiveQueryCluster#storage_account_key}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_container_id HdinsightInteractiveQueryCluster#storage_container_id}.

---

##### `storageResourceId`<sup>Optional</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}.

---

### HdinsightInteractiveQueryClusterStorageAccountGen2 <a name="HdinsightInteractiveQueryClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterStorageAccountGen2: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.filesystemId">filesystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#filesystem_id HdinsightInteractiveQueryCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#managed_identity_resource_id HdinsightInteractiveQueryCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}. |

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.filesystemId"></a>

```typescript
public readonly filesystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#filesystem_id HdinsightInteractiveQueryCluster#filesystem_id}.

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}.

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```typescript
public readonly managedIdentityResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#managed_identity_resource_id HdinsightInteractiveQueryCluster#managed_identity_resource_id}.

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}.

---

### HdinsightInteractiveQueryClusterTimeouts <a name="HdinsightInteractiveQueryClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

const hdinsightInteractiveQueryClusterTimeouts: hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#create HdinsightInteractiveQueryCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#delete HdinsightInteractiveQueryCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#read HdinsightInteractiveQueryCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#update HdinsightInteractiveQueryCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#create HdinsightInteractiveQueryCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#delete HdinsightInteractiveQueryCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#read HdinsightInteractiveQueryCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/hdinsight_interactive_query_cluster#update HdinsightInteractiveQueryCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightInteractiveQueryClusterComponentVersionOutputReference <a name="HdinsightInteractiveQueryClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHiveInput">interactiveHiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHive">interactiveHive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interactiveHiveInput`<sup>Optional</sup> <a name="interactiveHiveInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHiveInput"></a>

```typescript
public readonly interactiveHiveInput: string;
```

- *Type:* string

---

##### `interactiveHive`<sup>Required</sup> <a name="interactiveHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHive"></a>

```typescript
public readonly interactiveHive: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---


### HdinsightInteractiveQueryClusterComputeIsolationOutputReference <a name="HdinsightInteractiveQueryClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">resetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetHostSku">resetHostSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeIsolationEnabled` <a name="resetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```typescript
public resetComputeIsolationEnabled(): void
```

##### `resetHostSku` <a name="resetHostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetHostSku"></a>

```typescript
public resetHostSku(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">computeIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSkuInput">hostSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSku">hostSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeIsolationEnabledInput`<sup>Optional</sup> <a name="computeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```typescript
public readonly computeIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSkuInput`<sup>Optional</sup> <a name="hostSkuInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```typescript
public readonly hostSkuInput: string;
```

- *Type:* string

---

##### `computeIsolationEnabled`<sup>Required</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```typescript
public readonly computeIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSku`<sup>Required</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSku"></a>

```typescript
public readonly hostSku: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---


### HdinsightInteractiveQueryClusterDiskEncryptionList <a name="HdinsightInteractiveQueryClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get"></a>

```typescript
public get(index: number): HdinsightInteractiveQueryClusterDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>[]

---


### HdinsightInteractiveQueryClusterDiskEncryptionOutputReference <a name="HdinsightInteractiveQueryClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">resetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```typescript
public resetEncryptionAtHostEnabled(): void
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```typescript
public resetKeyVaultKeyId(): void
```

##### `resetKeyVaultManagedIdentityId` <a name="resetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```typescript
public resetKeyVaultManagedIdentityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">keyVaultManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```typescript
public readonly encryptionAtHostEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `keyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="keyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```typescript
public readonly keyVaultManagedIdentityIdInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `keyVaultManagedIdentityId`<sup>Required</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```typescript
public readonly keyVaultManagedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterDiskEncryption;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption">HdinsightInteractiveQueryClusterDiskEncryption</a>

---


### HdinsightInteractiveQueryClusterExtensionOutputReference <a name="HdinsightInteractiveQueryClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---


### HdinsightInteractiveQueryClusterGatewayOutputReference <a name="HdinsightInteractiveQueryClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---


### HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---


### HdinsightInteractiveQueryClusterMetastoresHiveOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---


### HdinsightInteractiveQueryClusterMetastoresOozieOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---


### HdinsightInteractiveQueryClusterMetastoresOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari">putAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive">putHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie">putOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetAmbari">resetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetHive">resetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetOozie">resetOozie</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmbari` <a name="putAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari"></a>

```typescript
public putAmbari(value: HdinsightInteractiveQueryClusterMetastoresAmbari): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---

##### `putHive` <a name="putHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive"></a>

```typescript
public putHive(value: HdinsightInteractiveQueryClusterMetastoresHive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---

##### `putOozie` <a name="putOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie"></a>

```typescript
public putOozie(value: HdinsightInteractiveQueryClusterMetastoresOozie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---

##### `resetAmbari` <a name="resetAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetAmbari"></a>

```typescript
public resetAmbari(): void
```

##### `resetHive` <a name="resetHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetHive"></a>

```typescript
public resetHive(): void
```

##### `resetOozie` <a name="resetOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetOozie"></a>

```typescript
public resetOozie(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference">HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference">HdinsightInteractiveQueryClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference">HdinsightInteractiveQueryClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambariInput">ambariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hiveInput">hiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozieInput">oozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambari"></a>

```typescript
public readonly ambari: HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference">HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hive"></a>

```typescript
public readonly hive: HdinsightInteractiveQueryClusterMetastoresHiveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference">HdinsightInteractiveQueryClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozie"></a>

```typescript
public readonly oozie: HdinsightInteractiveQueryClusterMetastoresOozieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference">HdinsightInteractiveQueryClusterMetastoresOozieOutputReference</a>

---

##### `ambariInput`<sup>Optional</sup> <a name="ambariInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambariInput"></a>

```typescript
public readonly ambariInput: HdinsightInteractiveQueryClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---

##### `hiveInput`<sup>Optional</sup> <a name="hiveInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hiveInput"></a>

```typescript
public readonly hiveInput: HdinsightInteractiveQueryClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---

##### `oozieInput`<sup>Optional</sup> <a name="oozieInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozieInput"></a>

```typescript
public readonly oozieInput: HdinsightInteractiveQueryClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---


### HdinsightInteractiveQueryClusterMonitorOutputReference <a name="HdinsightInteractiveQueryClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---


### HdinsightInteractiveQueryClusterNetworkOutputReference <a name="HdinsightInteractiveQueryClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetConnectionDirection">resetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetPrivateLinkEnabled">resetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionDirection` <a name="resetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetConnectionDirection"></a>

```typescript
public resetConnectionDirection(): void
```

##### `resetPrivateLinkEnabled` <a name="resetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```typescript
public resetPrivateLinkEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirectionInput">connectionDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabledInput">privateLinkEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirection">connectionDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionDirectionInput`<sup>Optional</sup> <a name="connectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```typescript
public readonly connectionDirectionInput: string;
```

- *Type:* string

---

##### `privateLinkEnabledInput`<sup>Optional</sup> <a name="privateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```typescript
public readonly privateLinkEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionDirection`<sup>Required</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirection"></a>

```typescript
public readonly connectionDirection: string;
```

- *Type:* string

---

##### `privateLinkEnabled`<sup>Required</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```typescript
public readonly privateLinkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---


### HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod">resetPrivateIpAllocationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetPrivateIpAllocationMethod` <a name="resetPrivateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod"></a>

```typescript
public resetPrivateIpAllocationMethod(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput">privateIpAllocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod">privateIpAllocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `privateIpAllocationMethodInput`<sup>Optional</sup> <a name="privateIpAllocationMethodInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput"></a>

```typescript
public readonly privateIpAllocationMethodInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAllocationMethod`<sup>Required</sup> <a name="privateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod"></a>

```typescript
public readonly privateIpAllocationMethod: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---


### HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration">putIpConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpConfiguration` <a name="putIpConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration"></a>

```typescript
public putIpConfiguration(value: HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterPrivateLinkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---


### HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>[]

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---


### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>[]

---


### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions</a>

---


### HdinsightInteractiveQueryClusterRolesOutputReference <a name="HdinsightInteractiveQueryClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode">putHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode">putWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode">putZookeeperNode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeadNode` <a name="putHeadNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode"></a>

```typescript
public putHeadNode(value: HdinsightInteractiveQueryClusterRolesHeadNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---

##### `putWorkerNode` <a name="putWorkerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode"></a>

```typescript
public putWorkerNode(value: HdinsightInteractiveQueryClusterRolesWorkerNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---

##### `putZookeeperNode` <a name="putZookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode"></a>

```typescript
public putZookeeperNode(value: HdinsightInteractiveQueryClusterRolesZookeeperNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference">HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference">HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNodeInput">headNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNodeInput">workerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNodeInput">zookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNode"></a>

```typescript
public readonly headNode: HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference">HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference</a>

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNode"></a>

```typescript
public readonly workerNode: HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNode"></a>

```typescript
public readonly zookeeperNode: HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference">HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference</a>

---

##### `headNodeInput`<sup>Optional</sup> <a name="headNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNodeInput"></a>

```typescript
public readonly headNodeInput: HdinsightInteractiveQueryClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---

##### `workerNodeInput`<sup>Optional</sup> <a name="workerNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNodeInput"></a>

```typescript
public readonly workerNodeInput: HdinsightInteractiveQueryClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---

##### `zookeeperNodeInput`<sup>Optional</sup> <a name="zookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```typescript
public readonly zookeeperNodeInput: HdinsightInteractiveQueryClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacity` <a name="putCapacity" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity"></a>

```typescript
public putCapacity(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity</a>

---

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```typescript
public putRecurrence(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.capacityInput">capacityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.capacity"></a>

```typescript
public readonly capacity: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">putSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```typescript
public readonly schedule: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```typescript
public get(index: number): HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>[]

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">daysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">targetInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: string[];
```

- *Type:* string[]

---

##### `targetInstanceCountInput`<sup>Optional</sup> <a name="targetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```typescript
public readonly targetInstanceCountInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale">putAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetAutoscale">resetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscale` <a name="putAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```typescript
public putAutoscale(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>[]

---

##### `resetAutoscale` <a name="resetAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```typescript
public resetAutoscale(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscaleInput">autoscaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">targetInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```typescript
public readonly autoscale: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList</a>

---

##### `autoscaleInput`<sup>Optional</sup> <a name="autoscaleInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```typescript
public readonly autoscaleInput: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `targetInstanceCountInput`<sup>Optional</sup> <a name="targetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```typescript
public readonly targetInstanceCountInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>[]

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions</a>

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>[]

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>[]

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions</a>

---


### HdinsightInteractiveQueryClusterSecurityProfileOutputReference <a name="HdinsightInteractiveQueryClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">resetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterUsersGroupDns` <a name="resetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```typescript
public resetClusterUsersGroupDns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aaddsResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">clusterUsersGroupDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsernameInput">domainUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domainUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldapsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceIdInput">msiResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceId">aaddsResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsername">domainUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPassword">domainUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrls">ldapsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceId">msiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aaddsResourceIdInput`<sup>Optional</sup> <a name="aaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```typescript
public readonly aaddsResourceIdInput: string;
```

- *Type:* string

---

##### `clusterUsersGroupDnsInput`<sup>Optional</sup> <a name="clusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```typescript
public readonly clusterUsersGroupDnsInput: string[];
```

- *Type:* string[]

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainUsernameInput`<sup>Optional</sup> <a name="domainUsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```typescript
public readonly domainUsernameInput: string;
```

- *Type:* string

---

##### `domainUserPasswordInput`<sup>Optional</sup> <a name="domainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```typescript
public readonly domainUserPasswordInput: string;
```

- *Type:* string

---

##### `ldapsUrlsInput`<sup>Optional</sup> <a name="ldapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```typescript
public readonly ldapsUrlsInput: string[];
```

- *Type:* string[]

---

##### `msiResourceIdInput`<sup>Optional</sup> <a name="msiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```typescript
public readonly msiResourceIdInput: string;
```

- *Type:* string

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```typescript
public readonly aaddsResourceId: string;
```

- *Type:* string

---

##### `clusterUsersGroupDns`<sup>Required</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```typescript
public readonly clusterUsersGroupDns: string[];
```

- *Type:* string[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsername"></a>

```typescript
public readonly domainUsername: string;
```

- *Type:* string

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```typescript
public readonly domainUserPassword: string;
```

- *Type:* string

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```typescript
public readonly ldapsUrls: string[];
```

- *Type:* string[]

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```typescript
public readonly msiResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---


### HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference <a name="HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managedIdentityResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemId">filesystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesystemIdInput`<sup>Optional</sup> <a name="filesystemIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```typescript
public readonly filesystemIdInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedIdentityResourceIdInput`<sup>Optional</sup> <a name="managedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```typescript
public readonly managedIdentityResourceIdInput: string;
```

- *Type:* string

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```typescript
public readonly storageResourceIdInput: string;
```

- *Type:* string

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```typescript
public readonly filesystemId: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```typescript
public readonly managedIdentityResourceId: string;
```

- *Type:* string

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightInteractiveQueryClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---


### HdinsightInteractiveQueryClusterStorageAccountList <a name="HdinsightInteractiveQueryClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get"></a>

```typescript
public get(index: number): HdinsightInteractiveQueryClusterStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>[]

---


### HdinsightInteractiveQueryClusterStorageAccountOutputReference <a name="HdinsightInteractiveQueryClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resetStorageResourceId">resetStorageResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageResourceId` <a name="resetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```typescript
public resetStorageResourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```typescript
public readonly storageAccountKeyInput: string;
```

- *Type:* string

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```typescript
public readonly storageContainerIdInput: string;
```

- *Type:* string

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```typescript
public readonly storageResourceIdInput: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterStorageAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount">HdinsightInteractiveQueryClusterStorageAccount</a>

---


### HdinsightInteractiveQueryClusterTimeoutsOutputReference <a name="HdinsightInteractiveQueryClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { hdinsightInteractiveQueryCluster } from '@cdktf/provider-azurerm'

new hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightInteractiveQueryClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

---



