# `cosmosdbCassandraKeyspace` Submodule <a name="`cosmosdbCassandraKeyspace` Submodule" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbCassandraKeyspace <a name="CosmosdbCassandraKeyspace" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace azurerm_cosmosdb_cassandra_keyspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.Initializer"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

new cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace(scope: Construct, id: string, config: CosmosdbCassandraKeyspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig">CosmosdbCassandraKeyspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig">CosmosdbCassandraKeyspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.putAutoscaleSettings">putAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetAutoscaleSettings">resetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaleSettings` <a name="putAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.putAutoscaleSettings"></a>

```typescript
public putAutoscaleSettings(value: CosmosdbCassandraKeyspaceAutoscaleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings">CosmosdbCassandraKeyspaceAutoscaleSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbCassandraKeyspaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts">CosmosdbCassandraKeyspaceTimeouts</a>

---

##### `resetAutoscaleSettings` <a name="resetAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetAutoscaleSettings"></a>

```typescript
public resetAutoscaleSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbCassandraKeyspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isConstruct"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isTerraformElement"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isTerraformResource"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.generateConfigForImport"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CosmosdbCassandraKeyspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbCassandraKeyspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbCassandraKeyspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbCassandraKeyspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference">CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference">CosmosdbCassandraKeyspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.autoscaleSettingsInput">autoscaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings">CosmosdbCassandraKeyspaceAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts">CosmosdbCassandraKeyspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaleSettings`<sup>Required</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.autoscaleSettings"></a>

```typescript
public readonly autoscaleSettings: CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference">CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbCassandraKeyspaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference">CosmosdbCassandraKeyspaceTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `autoscaleSettingsInput`<sup>Optional</sup> <a name="autoscaleSettingsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.autoscaleSettingsInput"></a>

```typescript
public readonly autoscaleSettingsInput: CosmosdbCassandraKeyspaceAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings">CosmosdbCassandraKeyspaceAutoscaleSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbCassandraKeyspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts">CosmosdbCassandraKeyspaceTimeouts</a>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbCassandraKeyspaceAutoscaleSettings <a name="CosmosdbCassandraKeyspaceAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings.Initializer"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

const cosmosdbCassandraKeyspaceAutoscaleSettings: cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#max_throughput CosmosdbCassandraKeyspace#max_throughput}. |

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#max_throughput CosmosdbCassandraKeyspace#max_throughput}.

---

### CosmosdbCassandraKeyspaceConfig <a name="CosmosdbCassandraKeyspaceConfig" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.Initializer"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

const cosmosdbCassandraKeyspaceConfig: cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#account_name CosmosdbCassandraKeyspace#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#name CosmosdbCassandraKeyspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#resource_group_name CosmosdbCassandraKeyspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings">CosmosdbCassandraKeyspaceAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#id CosmosdbCassandraKeyspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#throughput CosmosdbCassandraKeyspace#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts">CosmosdbCassandraKeyspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#account_name CosmosdbCassandraKeyspace#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#name CosmosdbCassandraKeyspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#resource_group_name CosmosdbCassandraKeyspace#resource_group_name}.

---

##### `autoscaleSettings`<sup>Optional</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.autoscaleSettings"></a>

```typescript
public readonly autoscaleSettings: CosmosdbCassandraKeyspaceAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings">CosmosdbCassandraKeyspaceAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#autoscale_settings CosmosdbCassandraKeyspace#autoscale_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#id CosmosdbCassandraKeyspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#throughput CosmosdbCassandraKeyspace#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbCassandraKeyspaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts">CosmosdbCassandraKeyspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#timeouts CosmosdbCassandraKeyspace#timeouts}

---

### CosmosdbCassandraKeyspaceTimeouts <a name="CosmosdbCassandraKeyspaceTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.Initializer"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

const cosmosdbCassandraKeyspaceTimeouts: cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#create CosmosdbCassandraKeyspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#delete CosmosdbCassandraKeyspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#read CosmosdbCassandraKeyspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#update CosmosdbCassandraKeyspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#create CosmosdbCassandraKeyspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#delete CosmosdbCassandraKeyspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#read CosmosdbCassandraKeyspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_cassandra_keyspace#update CosmosdbCassandraKeyspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference <a name="CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.Initializer"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

new cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.resetMaxThroughput">resetMaxThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxThroughput` <a name="resetMaxThroughput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```typescript
public resetMaxThroughput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.maxThroughputInput">maxThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings">CosmosdbCassandraKeyspaceAutoscaleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxThroughputInput`<sup>Optional</sup> <a name="maxThroughputInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```typescript
public readonly maxThroughputInput: number;
```

- *Type:* number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbCassandraKeyspaceAutoscaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceAutoscaleSettings">CosmosdbCassandraKeyspaceAutoscaleSettings</a>

---


### CosmosdbCassandraKeyspaceTimeoutsOutputReference <a name="CosmosdbCassandraKeyspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbCassandraKeyspace } from '@cdktf/provider-azurerm'

new cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts">CosmosdbCassandraKeyspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbCassandraKeyspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbCassandraKeyspace.CosmosdbCassandraKeyspaceTimeouts">CosmosdbCassandraKeyspaceTimeouts</a>

---



