# `azurerm_cosmosdb_mongo_collection`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_mongo_collection`](https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection).

# `cosmosdbMongoCollection` Submodule <a name="`cosmosdbMongoCollection` Submodule" id="@cdktf/provider-azurerm.cosmosdbMongoCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbMongoCollection <a name="CosmosdbMongoCollection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection azurerm_cosmosdb_mongo_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

new cosmosdbMongoCollection.CosmosdbMongoCollection(scope: Construct, id: string, config: CosmosdbMongoCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig">CosmosdbMongoCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig">CosmosdbMongoCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings">putAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex">putIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAnalyticalStorageTtl">resetAnalyticalStorageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAutoscaleSettings">resetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetDefaultTtlSeconds">resetDefaultTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetShardKey">resetShardKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoscaleSettings` <a name="putAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings"></a>

```typescript
public putAutoscaleSettings(value: CosmosdbMongoCollectionAutoscaleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

---

##### `putIndex` <a name="putIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex"></a>

```typescript
public putIndex(value: IResolvable | CosmosdbMongoCollectionIndex[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbMongoCollectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

---

##### `resetAnalyticalStorageTtl` <a name="resetAnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAnalyticalStorageTtl"></a>

```typescript
public resetAnalyticalStorageTtl(): void
```

##### `resetAutoscaleSettings` <a name="resetAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAutoscaleSettings"></a>

```typescript
public resetAutoscaleSettings(): void
```

##### `resetDefaultTtlSeconds` <a name="resetDefaultTtlSeconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetDefaultTtlSeconds"></a>

```typescript
public resetDefaultTtlSeconds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetIndex"></a>

```typescript
public resetIndex(): void
```

##### `resetShardKey` <a name="resetShardKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetShardKey"></a>

```typescript
public resetShardKey(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference">CosmosdbMongoCollectionAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.index">index</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList">CosmosdbMongoCollectionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.systemIndexes">systemIndexes</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList">CosmosdbMongoCollectionSystemIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference">CosmosdbMongoCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtlInput">analyticalStorageTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettingsInput">autoscaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSecondsInput">defaultTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.indexInput">indexInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKeyInput">shardKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSeconds">defaultTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKey">shardKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaleSettings`<sup>Required</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettings"></a>

```typescript
public readonly autoscaleSettings: CosmosdbMongoCollectionAutoscaleSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference">CosmosdbMongoCollectionAutoscaleSettingsOutputReference</a>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.index"></a>

```typescript
public readonly index: CosmosdbMongoCollectionIndexList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList">CosmosdbMongoCollectionIndexList</a>

---

##### `systemIndexes`<sup>Required</sup> <a name="systemIndexes" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.systemIndexes"></a>

```typescript
public readonly systemIndexes: CosmosdbMongoCollectionSystemIndexesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList">CosmosdbMongoCollectionSystemIndexesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbMongoCollectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference">CosmosdbMongoCollectionTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `analyticalStorageTtlInput`<sup>Optional</sup> <a name="analyticalStorageTtlInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtlInput"></a>

```typescript
public readonly analyticalStorageTtlInput: number;
```

- *Type:* number

---

##### `autoscaleSettingsInput`<sup>Optional</sup> <a name="autoscaleSettingsInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettingsInput"></a>

```typescript
public readonly autoscaleSettingsInput: CosmosdbMongoCollectionAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `defaultTtlSecondsInput`<sup>Optional</sup> <a name="defaultTtlSecondsInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSecondsInput"></a>

```typescript
public readonly defaultTtlSecondsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.indexInput"></a>

```typescript
public readonly indexInput: IResolvable | CosmosdbMongoCollectionIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `shardKeyInput`<sup>Optional</sup> <a name="shardKeyInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKeyInput"></a>

```typescript
public readonly shardKeyInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CosmosdbMongoCollectionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a> | cdktf.IResolvable

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `analyticalStorageTtl`<sup>Required</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtl"></a>

```typescript
public readonly analyticalStorageTtl: number;
```

- *Type:* number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `defaultTtlSeconds`<sup>Required</sup> <a name="defaultTtlSeconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSeconds"></a>

```typescript
public readonly defaultTtlSeconds: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `shardKey`<sup>Required</sup> <a name="shardKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKey"></a>

```typescript
public readonly shardKey: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbMongoCollectionAutoscaleSettings <a name="CosmosdbMongoCollectionAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

const cosmosdbMongoCollectionAutoscaleSettings: cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#max_throughput CosmosdbMongoCollection#max_throughput}. |

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#max_throughput CosmosdbMongoCollection#max_throughput}.

---

### CosmosdbMongoCollectionConfig <a name="CosmosdbMongoCollectionConfig" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

const cosmosdbMongoCollectionConfig: cosmosdbMongoCollection.CosmosdbMongoCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.defaultTtlSeconds">defaultTtlSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.index">index</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>[]</code> | index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.shardKey">shardKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}.

---

##### `analyticalStorageTtl`<sup>Optional</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.analyticalStorageTtl"></a>

```typescript
public readonly analyticalStorageTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}.

---

##### `autoscaleSettings`<sup>Optional</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.autoscaleSettings"></a>

```typescript
public readonly autoscaleSettings: CosmosdbMongoCollectionAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#autoscale_settings CosmosdbMongoCollection#autoscale_settings}

---

##### `defaultTtlSeconds`<sup>Optional</sup> <a name="defaultTtlSeconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.defaultTtlSeconds"></a>

```typescript
public readonly defaultTtlSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.index"></a>

```typescript
public readonly index: IResolvable | CosmosdbMongoCollectionIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>[]

index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#index CosmosdbMongoCollection#index}

---

##### `shardKey`<sup>Optional</sup> <a name="shardKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.shardKey"></a>

```typescript
public readonly shardKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbMongoCollectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#timeouts CosmosdbMongoCollection#timeouts}

---

### CosmosdbMongoCollectionIndex <a name="CosmosdbMongoCollectionIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

const cosmosdbMongoCollectionIndex: cosmosdbMongoCollection.CosmosdbMongoCollectionIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.keys">keys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#keys CosmosdbMongoCollection#keys}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.unique">unique</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#unique CosmosdbMongoCollection#unique}. |

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#keys CosmosdbMongoCollection#keys}.

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.unique"></a>

```typescript
public readonly unique: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#unique CosmosdbMongoCollection#unique}.

---

### CosmosdbMongoCollectionSystemIndexes <a name="CosmosdbMongoCollectionSystemIndexes" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

const cosmosdbMongoCollectionSystemIndexes: cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes = { ... }
```


### CosmosdbMongoCollectionTimeouts <a name="CosmosdbMongoCollectionTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

const cosmosdbMongoCollectionTimeouts: cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#create CosmosdbMongoCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#delete CosmosdbMongoCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#read CosmosdbMongoCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#update CosmosdbMongoCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#create CosmosdbMongoCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#delete CosmosdbMongoCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#read CosmosdbMongoCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_collection#update CosmosdbMongoCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbMongoCollectionAutoscaleSettingsOutputReference <a name="CosmosdbMongoCollectionAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

new cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resetMaxThroughput">resetMaxThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxThroughput` <a name="resetMaxThroughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```typescript
public resetMaxThroughput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughputInput">maxThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxThroughputInput`<sup>Optional</sup> <a name="maxThroughputInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```typescript
public readonly maxThroughputInput: number;
```

- *Type:* number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbMongoCollectionAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

---


### CosmosdbMongoCollectionIndexList <a name="CosmosdbMongoCollectionIndexList" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

new cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get"></a>

```typescript
public get(index: number): CosmosdbMongoCollectionIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbMongoCollectionIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>[]

---


### CosmosdbMongoCollectionIndexOutputReference <a name="CosmosdbMongoCollectionIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

new cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resetUnique">resetUnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resetUnique"></a>

```typescript
public resetUnique(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keysInput">keysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.uniqueInput">uniqueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.unique">unique</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keysInput"></a>

```typescript
public readonly keysInput: string[];
```

- *Type:* string[]

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.uniqueInput"></a>

```typescript
public readonly uniqueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.unique"></a>

```typescript
public readonly unique: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbMongoCollectionIndex | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a> | cdktf.IResolvable

---


### CosmosdbMongoCollectionSystemIndexesList <a name="CosmosdbMongoCollectionSystemIndexesList" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

new cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get"></a>

```typescript
public get(index: number): CosmosdbMongoCollectionSystemIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CosmosdbMongoCollectionSystemIndexesOutputReference <a name="CosmosdbMongoCollectionSystemIndexesOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

new cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.unique">unique</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes">CosmosdbMongoCollectionSystemIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.unique"></a>

```typescript
public readonly unique: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbMongoCollectionSystemIndexes;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes">CosmosdbMongoCollectionSystemIndexes</a>

---


### CosmosdbMongoCollectionTimeoutsOutputReference <a name="CosmosdbMongoCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbMongoCollection } from '@cdktf/provider-azurerm'

new cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbMongoCollectionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a> | cdktf.IResolvable

---



