# `cosmosdbGremlinGraph` Submodule <a name="`cosmosdbGremlinGraph` Submodule" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbGremlinGraph <a name="CosmosdbGremlinGraph" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph azurerm_cosmosdb_gremlin_graph}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraph(scope: Construct, id: string, config: CosmosdbGremlinGraphConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig">CosmosdbGremlinGraphConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig">CosmosdbGremlinGraphConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings">putAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy">putConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy">putIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey">putUniqueKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAnalyticalStorageTtl">resetAnalyticalStorageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAutoscaleSettings">resetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetConflictResolutionPolicy">resetConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetIndexPolicy">resetIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetPartitionKeyVersion">resetPartitionKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetUniqueKey">resetUniqueKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaleSettings` <a name="putAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings"></a>

```typescript
public putAutoscaleSettings(value: CosmosdbGremlinGraphAutoscaleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---

##### `putConflictResolutionPolicy` <a name="putConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy"></a>

```typescript
public putConflictResolutionPolicy(value: CosmosdbGremlinGraphConflictResolutionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---

##### `putIndexPolicy` <a name="putIndexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy"></a>

```typescript
public putIndexPolicy(value: CosmosdbGremlinGraphIndexPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbGremlinGraphTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

---

##### `putUniqueKey` <a name="putUniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey"></a>

```typescript
public putUniqueKey(value: IResolvable | CosmosdbGremlinGraphUniqueKey[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]

---

##### `resetAnalyticalStorageTtl` <a name="resetAnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAnalyticalStorageTtl"></a>

```typescript
public resetAnalyticalStorageTtl(): void
```

##### `resetAutoscaleSettings` <a name="resetAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAutoscaleSettings"></a>

```typescript
public resetAutoscaleSettings(): void
```

##### `resetConflictResolutionPolicy` <a name="resetConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetConflictResolutionPolicy"></a>

```typescript
public resetConflictResolutionPolicy(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexPolicy` <a name="resetIndexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetIndexPolicy"></a>

```typescript
public resetIndexPolicy(): void
```

##### `resetPartitionKeyVersion` <a name="resetPartitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetPartitionKeyVersion"></a>

```typescript
public resetPartitionKeyVersion(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUniqueKey` <a name="resetUniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetUniqueKey"></a>

```typescript
public resetUniqueKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbGremlinGraph resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CosmosdbGremlinGraph resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbGremlinGraph to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbGremlinGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbGremlinGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference">CosmosdbGremlinGraphAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicy">conflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference">CosmosdbGremlinGraphConflictResolutionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicy">indexPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference">CosmosdbGremlinGraphIndexPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference">CosmosdbGremlinGraphTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKey">uniqueKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList">CosmosdbGremlinGraphUniqueKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.analyticalStorageTtlInput">analyticalStorageTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettingsInput">autoscaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicyInput">conflictResolutionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicyInput">indexPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPathInput">partitionKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersionInput">partitionKeyVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKeyInput">uniqueKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPath">partitionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersion">partitionKeyVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaleSettings`<sup>Required</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettings"></a>

```typescript
public readonly autoscaleSettings: CosmosdbGremlinGraphAutoscaleSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference">CosmosdbGremlinGraphAutoscaleSettingsOutputReference</a>

---

##### `conflictResolutionPolicy`<sup>Required</sup> <a name="conflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicy"></a>

```typescript
public readonly conflictResolutionPolicy: CosmosdbGremlinGraphConflictResolutionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference">CosmosdbGremlinGraphConflictResolutionPolicyOutputReference</a>

---

##### `indexPolicy`<sup>Required</sup> <a name="indexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicy"></a>

```typescript
public readonly indexPolicy: CosmosdbGremlinGraphIndexPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference">CosmosdbGremlinGraphIndexPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbGremlinGraphTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference">CosmosdbGremlinGraphTimeoutsOutputReference</a>

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: CosmosdbGremlinGraphUniqueKeyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList">CosmosdbGremlinGraphUniqueKeyList</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `analyticalStorageTtlInput`<sup>Optional</sup> <a name="analyticalStorageTtlInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.analyticalStorageTtlInput"></a>

```typescript
public readonly analyticalStorageTtlInput: number;
```

- *Type:* number

---

##### `autoscaleSettingsInput`<sup>Optional</sup> <a name="autoscaleSettingsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettingsInput"></a>

```typescript
public readonly autoscaleSettingsInput: CosmosdbGremlinGraphAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---

##### `conflictResolutionPolicyInput`<sup>Optional</sup> <a name="conflictResolutionPolicyInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicyInput"></a>

```typescript
public readonly conflictResolutionPolicyInput: CosmosdbGremlinGraphConflictResolutionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexPolicyInput`<sup>Optional</sup> <a name="indexPolicyInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicyInput"></a>

```typescript
public readonly indexPolicyInput: CosmosdbGremlinGraphIndexPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionKeyPathInput`<sup>Optional</sup> <a name="partitionKeyPathInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPathInput"></a>

```typescript
public readonly partitionKeyPathInput: string;
```

- *Type:* string

---

##### `partitionKeyVersionInput`<sup>Optional</sup> <a name="partitionKeyVersionInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersionInput"></a>

```typescript
public readonly partitionKeyVersionInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbGremlinGraphTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

---

##### `uniqueKeyInput`<sup>Optional</sup> <a name="uniqueKeyInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKeyInput"></a>

```typescript
public readonly uniqueKeyInput: IResolvable | CosmosdbGremlinGraphUniqueKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `analyticalStorageTtl`<sup>Required</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.analyticalStorageTtl"></a>

```typescript
public readonly analyticalStorageTtl: number;
```

- *Type:* number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partitionKeyPath`<sup>Required</sup> <a name="partitionKeyPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPath"></a>

```typescript
public readonly partitionKeyPath: string;
```

- *Type:* string

---

##### `partitionKeyVersion`<sup>Required</sup> <a name="partitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersion"></a>

```typescript
public readonly partitionKeyVersion: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbGremlinGraphAutoscaleSettings <a name="CosmosdbGremlinGraphAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphAutoscaleSettings: cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#max_throughput CosmosdbGremlinGraph#max_throughput}. |

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#max_throughput CosmosdbGremlinGraph#max_throughput}.

---

### CosmosdbGremlinGraphConfig <a name="CosmosdbGremlinGraphConfig" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphConfig: cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#account_name CosmosdbGremlinGraph#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#database_name CosmosdbGremlinGraph#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#name CosmosdbGremlinGraph#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyPath">partitionKeyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#partition_key_path CosmosdbGremlinGraph#partition_key_path}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#resource_group_name CosmosdbGremlinGraph#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#analytical_storage_ttl CosmosdbGremlinGraph#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.conflictResolutionPolicy">conflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | conflict_resolution_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#default_ttl CosmosdbGremlinGraph#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#id CosmosdbGremlinGraph#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.indexPolicy">indexPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | index_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyVersion">partitionKeyVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#partition_key_version CosmosdbGremlinGraph#partition_key_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#throughput CosmosdbGremlinGraph#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.uniqueKey">uniqueKey</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]</code> | unique_key block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#account_name CosmosdbGremlinGraph#account_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#database_name CosmosdbGremlinGraph#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#name CosmosdbGremlinGraph#name}.

---

##### `partitionKeyPath`<sup>Required</sup> <a name="partitionKeyPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyPath"></a>

```typescript
public readonly partitionKeyPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#partition_key_path CosmosdbGremlinGraph#partition_key_path}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#resource_group_name CosmosdbGremlinGraph#resource_group_name}.

---

##### `analyticalStorageTtl`<sup>Optional</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.analyticalStorageTtl"></a>

```typescript
public readonly analyticalStorageTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#analytical_storage_ttl CosmosdbGremlinGraph#analytical_storage_ttl}.

---

##### `autoscaleSettings`<sup>Optional</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.autoscaleSettings"></a>

```typescript
public readonly autoscaleSettings: CosmosdbGremlinGraphAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#autoscale_settings CosmosdbGremlinGraph#autoscale_settings}

---

##### `conflictResolutionPolicy`<sup>Optional</sup> <a name="conflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.conflictResolutionPolicy"></a>

```typescript
public readonly conflictResolutionPolicy: CosmosdbGremlinGraphConflictResolutionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

conflict_resolution_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_policy CosmosdbGremlinGraph#conflict_resolution_policy}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#default_ttl CosmosdbGremlinGraph#default_ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#id CosmosdbGremlinGraph#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexPolicy`<sup>Optional</sup> <a name="indexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.indexPolicy"></a>

```typescript
public readonly indexPolicy: CosmosdbGremlinGraphIndexPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

index_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#index_policy CosmosdbGremlinGraph#index_policy}

---

##### `partitionKeyVersion`<sup>Optional</sup> <a name="partitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyVersion"></a>

```typescript
public readonly partitionKeyVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#partition_key_version CosmosdbGremlinGraph#partition_key_version}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#throughput CosmosdbGremlinGraph#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbGremlinGraphTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#timeouts CosmosdbGremlinGraph#timeouts}

---

##### `uniqueKey`<sup>Optional</sup> <a name="uniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: IResolvable | CosmosdbGremlinGraphUniqueKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]

unique_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#unique_key CosmosdbGremlinGraph#unique_key}

---

### CosmosdbGremlinGraphConflictResolutionPolicy <a name="CosmosdbGremlinGraphConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphConflictResolutionPolicy: cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#mode CosmosdbGremlinGraph#mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionPath">conflictResolutionPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_path CosmosdbGremlinGraph#conflict_resolution_path}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionProcedure">conflictResolutionProcedure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_procedure CosmosdbGremlinGraph#conflict_resolution_procedure}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#mode CosmosdbGremlinGraph#mode}.

---

##### `conflictResolutionPath`<sup>Optional</sup> <a name="conflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionPath"></a>

```typescript
public readonly conflictResolutionPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_path CosmosdbGremlinGraph#conflict_resolution_path}.

---

##### `conflictResolutionProcedure`<sup>Optional</sup> <a name="conflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionProcedure"></a>

```typescript
public readonly conflictResolutionProcedure: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_procedure CosmosdbGremlinGraph#conflict_resolution_procedure}.

---

### CosmosdbGremlinGraphIndexPolicy <a name="CosmosdbGremlinGraphIndexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphIndexPolicy: cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.indexingMode">indexingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#indexing_mode CosmosdbGremlinGraph#indexing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.automatic">automatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#automatic CosmosdbGremlinGraph#automatic}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.compositeIndex">compositeIndex</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]</code> | composite_index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.excludedPaths">excludedPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#excluded_paths CosmosdbGremlinGraph#excluded_paths}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.includedPaths">includedPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#included_paths CosmosdbGremlinGraph#included_paths}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.spatialIndex">spatialIndex</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]</code> | spatial_index block. |

---

##### `indexingMode`<sup>Required</sup> <a name="indexingMode" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.indexingMode"></a>

```typescript
public readonly indexingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#indexing_mode CosmosdbGremlinGraph#indexing_mode}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#automatic CosmosdbGremlinGraph#automatic}.

---

##### `compositeIndex`<sup>Optional</sup> <a name="compositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.compositeIndex"></a>

```typescript
public readonly compositeIndex: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]

composite_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#composite_index CosmosdbGremlinGraph#composite_index}

---

##### `excludedPaths`<sup>Optional</sup> <a name="excludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.excludedPaths"></a>

```typescript
public readonly excludedPaths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#excluded_paths CosmosdbGremlinGraph#excluded_paths}.

---

##### `includedPaths`<sup>Optional</sup> <a name="includedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.includedPaths"></a>

```typescript
public readonly includedPaths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#included_paths CosmosdbGremlinGraph#included_paths}.

---

##### `spatialIndex`<sup>Optional</sup> <a name="spatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.spatialIndex"></a>

```typescript
public readonly spatialIndex: IResolvable | CosmosdbGremlinGraphIndexPolicySpatialIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]

spatial_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#spatial_index CosmosdbGremlinGraph#spatial_index}

---

### CosmosdbGremlinGraphIndexPolicyCompositeIndex <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphIndexPolicyCompositeIndex: cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.property.index">index</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]</code> | index block. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.property.index"></a>

```typescript
public readonly index: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#index CosmosdbGremlinGraph#index}

---

### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphIndexPolicyCompositeIndexIndex: cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.order">order</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#order CosmosdbGremlinGraph#order}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}. |

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#order CosmosdbGremlinGraph#order}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}.

---

### CosmosdbGremlinGraphIndexPolicySpatialIndex <a name="CosmosdbGremlinGraphIndexPolicySpatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphIndexPolicySpatialIndex: cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}.

---

### CosmosdbGremlinGraphTimeouts <a name="CosmosdbGremlinGraphTimeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphTimeouts: cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#create CosmosdbGremlinGraph#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#delete CosmosdbGremlinGraph#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#read CosmosdbGremlinGraph#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#update CosmosdbGremlinGraph#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#create CosmosdbGremlinGraph#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#delete CosmosdbGremlinGraph#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#read CosmosdbGremlinGraph#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#update CosmosdbGremlinGraph#update}.

---

### CosmosdbGremlinGraphUniqueKey <a name="CosmosdbGremlinGraphUniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

const cosmosdbGremlinGraphUniqueKey: cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.property.paths">paths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#paths CosmosdbGremlinGraph#paths}. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_gremlin_graph#paths CosmosdbGremlinGraph#paths}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbGremlinGraphAutoscaleSettingsOutputReference <a name="CosmosdbGremlinGraphAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resetMaxThroughput">resetMaxThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxThroughput` <a name="resetMaxThroughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```typescript
public resetMaxThroughput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughputInput">maxThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxThroughputInput`<sup>Optional</sup> <a name="maxThroughputInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```typescript
public readonly maxThroughputInput: number;
```

- *Type:* number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbGremlinGraphAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---


### CosmosdbGremlinGraphConflictResolutionPolicyOutputReference <a name="CosmosdbGremlinGraphConflictResolutionPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionPath">resetConflictResolutionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure">resetConflictResolutionProcedure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConflictResolutionPath` <a name="resetConflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionPath"></a>

```typescript
public resetConflictResolutionPath(): void
```

##### `resetConflictResolutionProcedure` <a name="resetConflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure"></a>

```typescript
public resetConflictResolutionProcedure(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput">conflictResolutionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput">conflictResolutionProcedureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPath">conflictResolutionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure">conflictResolutionProcedure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conflictResolutionPathInput`<sup>Optional</sup> <a name="conflictResolutionPathInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput"></a>

```typescript
public readonly conflictResolutionPathInput: string;
```

- *Type:* string

---

##### `conflictResolutionProcedureInput`<sup>Optional</sup> <a name="conflictResolutionProcedureInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput"></a>

```typescript
public readonly conflictResolutionProcedureInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `conflictResolutionPath`<sup>Required</sup> <a name="conflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPath"></a>

```typescript
public readonly conflictResolutionPath: string;
```

- *Type:* string

---

##### `conflictResolutionProcedure`<sup>Required</sup> <a name="conflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure"></a>

```typescript
public readonly conflictResolutionProcedure: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbGremlinGraphConflictResolutionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get"></a>

```typescript
public get(index: number): CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexList <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexList" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get"></a>

```typescript
public get(index: number): CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex">putIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIndex` <a name="putIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex"></a>

```typescript
public putIndex(value: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.index">index</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.indexInput">indexInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.index"></a>

```typescript
public readonly index: CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList</a>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndex;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>

---


### CosmosdbGremlinGraphIndexPolicyOutputReference <a name="CosmosdbGremlinGraphIndexPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex">putCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex">putSpatialIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetCompositeIndex">resetCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetExcludedPaths">resetExcludedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetIncludedPaths">resetIncludedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetSpatialIndex">resetSpatialIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompositeIndex` <a name="putCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex"></a>

```typescript
public putCompositeIndex(value: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndex[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]

---

##### `putSpatialIndex` <a name="putSpatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex"></a>

```typescript
public putSpatialIndex(value: IResolvable | CosmosdbGremlinGraphIndexPolicySpatialIndex[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetAutomatic"></a>

```typescript
public resetAutomatic(): void
```

##### `resetCompositeIndex` <a name="resetCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetCompositeIndex"></a>

```typescript
public resetCompositeIndex(): void
```

##### `resetExcludedPaths` <a name="resetExcludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetExcludedPaths"></a>

```typescript
public resetExcludedPaths(): void
```

##### `resetIncludedPaths` <a name="resetIncludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetIncludedPaths"></a>

```typescript
public resetIncludedPaths(): void
```

##### `resetSpatialIndex` <a name="resetSpatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetSpatialIndex"></a>

```typescript
public resetSpatialIndex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndex">compositeIndex</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndex">spatialIndex</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList">CosmosdbGremlinGraphIndexPolicySpatialIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automaticInput">automaticInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndexInput">compositeIndexInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPathsInput">excludedPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPathsInput">includedPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingModeInput">indexingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndexInput">spatialIndexInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automatic">automatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPaths">excludedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPaths">includedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingMode">indexingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compositeIndex`<sup>Required</sup> <a name="compositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndex"></a>

```typescript
public readonly compositeIndex: CosmosdbGremlinGraphIndexPolicyCompositeIndexList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexList</a>

---

##### `spatialIndex`<sup>Required</sup> <a name="spatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndex"></a>

```typescript
public readonly spatialIndex: CosmosdbGremlinGraphIndexPolicySpatialIndexList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList">CosmosdbGremlinGraphIndexPolicySpatialIndexList</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automaticInput"></a>

```typescript
public readonly automaticInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compositeIndexInput`<sup>Optional</sup> <a name="compositeIndexInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndexInput"></a>

```typescript
public readonly compositeIndexInput: IResolvable | CosmosdbGremlinGraphIndexPolicyCompositeIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]

---

##### `excludedPathsInput`<sup>Optional</sup> <a name="excludedPathsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPathsInput"></a>

```typescript
public readonly excludedPathsInput: string[];
```

- *Type:* string[]

---

##### `includedPathsInput`<sup>Optional</sup> <a name="includedPathsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPathsInput"></a>

```typescript
public readonly includedPathsInput: string[];
```

- *Type:* string[]

---

##### `indexingModeInput`<sup>Optional</sup> <a name="indexingModeInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingModeInput"></a>

```typescript
public readonly indexingModeInput: string;
```

- *Type:* string

---

##### `spatialIndexInput`<sup>Optional</sup> <a name="spatialIndexInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndexInput"></a>

```typescript
public readonly spatialIndexInput: IResolvable | CosmosdbGremlinGraphIndexPolicySpatialIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedPaths`<sup>Required</sup> <a name="excludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPaths"></a>

```typescript
public readonly excludedPaths: string[];
```

- *Type:* string[]

---

##### `includedPaths`<sup>Required</sup> <a name="includedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPaths"></a>

```typescript
public readonly includedPaths: string[];
```

- *Type:* string[]

---

##### `indexingMode`<sup>Required</sup> <a name="indexingMode" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingMode"></a>

```typescript
public readonly indexingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbGremlinGraphIndexPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---


### CosmosdbGremlinGraphIndexPolicySpatialIndexList <a name="CosmosdbGremlinGraphIndexPolicySpatialIndexList" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get"></a>

```typescript
public get(index: number): CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphIndexPolicySpatialIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]

---


### CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphIndexPolicySpatialIndex;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>

---


### CosmosdbGremlinGraphTimeoutsOutputReference <a name="CosmosdbGremlinGraphTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

---


### CosmosdbGremlinGraphUniqueKeyList <a name="CosmosdbGremlinGraphUniqueKeyList" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get"></a>

```typescript
public get(index: number): CosmosdbGremlinGraphUniqueKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphUniqueKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]

---


### CosmosdbGremlinGraphUniqueKeyOutputReference <a name="CosmosdbGremlinGraphUniqueKeyOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer"></a>

```typescript
import { cosmosdbGremlinGraph } from '@cdktf/provider-azurerm'

new cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.pathsInput">pathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.pathsInput"></a>

```typescript
public readonly pathsInput: string[];
```

- *Type:* string[]

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbGremlinGraphUniqueKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>

---



