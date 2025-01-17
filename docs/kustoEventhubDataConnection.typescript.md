# `kustoEventhubDataConnection` Submodule <a name="`kustoEventhubDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoEventhubDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoEventhubDataConnection <a name="KustoEventhubDataConnection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection azurerm_kusto_eventhub_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer"></a>

```typescript
import { kustoEventhubDataConnection } from '@cdktf/provider-azurerm'

new kustoEventhubDataConnection.KustoEventhubDataConnection(scope: Construct, id: string, config: KustoEventhubDataConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig">KustoEventhubDataConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig">KustoEventhubDataConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDatabaseRoutingType">resetDatabaseRoutingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetEventSystemProperties">resetEventSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetMappingRuleName">resetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: KustoEventhubDataConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

---

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDatabaseRoutingType` <a name="resetDatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDatabaseRoutingType"></a>

```typescript
public resetDatabaseRoutingType(): void
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDataFormat"></a>

```typescript
public resetDataFormat(): void
```

##### `resetEventSystemProperties` <a name="resetEventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetEventSystemProperties"></a>

```typescript
public resetEventSystemProperties(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetIdentityId"></a>

```typescript
public resetIdentityId(): void
```

##### `resetMappingRuleName` <a name="resetMappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetMappingRuleName"></a>

```typescript
public resetMappingRuleName(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KustoEventhubDataConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct"></a>

```typescript
import { kustoEventhubDataConnection } from '@cdktf/provider-azurerm'

kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement"></a>

```typescript
import { kustoEventhubDataConnection } from '@cdktf/provider-azurerm'

kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource"></a>

```typescript
import { kustoEventhubDataConnection } from '@cdktf/provider-azurerm'

kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.generateConfigForImport"></a>

```typescript
import { kustoEventhubDataConnection } from '@cdktf/provider-azurerm'

kustoEventhubDataConnection.KustoEventhubDataConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KustoEventhubDataConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KustoEventhubDataConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KustoEventhubDataConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KustoEventhubDataConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference">KustoEventhubDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroupInput">consumerGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingTypeInput">databaseRoutingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubIdInput">eventhubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemPropertiesInput">eventSystemPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityIdInput">identityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleNameInput">mappingRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingType">databaseRoutingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubId">eventhubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemProperties">eventSystemProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityId">identityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleName">mappingRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeouts"></a>

```typescript
public readonly timeouts: KustoEventhubDataConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference">KustoEventhubDataConnectionTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `consumerGroupInput`<sup>Optional</sup> <a name="consumerGroupInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroupInput"></a>

```typescript
public readonly consumerGroupInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `databaseRoutingTypeInput`<sup>Optional</sup> <a name="databaseRoutingTypeInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingTypeInput"></a>

```typescript
public readonly databaseRoutingTypeInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `eventhubIdInput`<sup>Optional</sup> <a name="eventhubIdInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubIdInput"></a>

```typescript
public readonly eventhubIdInput: string;
```

- *Type:* string

---

##### `eventSystemPropertiesInput`<sup>Optional</sup> <a name="eventSystemPropertiesInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemPropertiesInput"></a>

```typescript
public readonly eventSystemPropertiesInput: string[];
```

- *Type:* string[]

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityIdInput"></a>

```typescript
public readonly identityIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mappingRuleNameInput`<sup>Optional</sup> <a name="mappingRuleNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleNameInput"></a>

```typescript
public readonly mappingRuleNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KustoEventhubDataConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databaseRoutingType`<sup>Required</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingType"></a>

```typescript
public readonly databaseRoutingType: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `eventhubId`<sup>Required</sup> <a name="eventhubId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubId"></a>

```typescript
public readonly eventhubId: string;
```

- *Type:* string

---

##### `eventSystemProperties`<sup>Required</sup> <a name="eventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemProperties"></a>

```typescript
public readonly eventSystemProperties: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mappingRuleName`<sup>Required</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleName"></a>

```typescript
public readonly mappingRuleName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoEventhubDataConnectionConfig <a name="KustoEventhubDataConnectionConfig" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.Initializer"></a>

```typescript
import { kustoEventhubDataConnection } from '@cdktf/provider-azurerm'

const kustoEventhubDataConnectionConfig: kustoEventhubDataConnection.KustoEventhubDataConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventhubId">eventhubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.compression">compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseRoutingType">databaseRoutingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventSystemProperties">eventSystemProperties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.identityId">identityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.mappingRuleName">mappingRuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}.

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}.

---

##### `eventhubId`<sup>Required</sup> <a name="eventhubId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventhubId"></a>

```typescript
public readonly eventhubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}.

---

##### `databaseRoutingType`<sup>Optional</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseRoutingType"></a>

```typescript
public readonly databaseRoutingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}.

---

##### `eventSystemProperties`<sup>Optional</sup> <a name="eventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventSystemProperties"></a>

```typescript
public readonly eventSystemProperties: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}.

---

##### `mappingRuleName`<sup>Optional</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.mappingRuleName"></a>

```typescript
public readonly mappingRuleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KustoEventhubDataConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#timeouts KustoEventhubDataConnection#timeouts}

---

### KustoEventhubDataConnectionTimeouts <a name="KustoEventhubDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.Initializer"></a>

```typescript
import { kustoEventhubDataConnection } from '@cdktf/provider-azurerm'

const kustoEventhubDataConnectionTimeouts: kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#create KustoEventhubDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#delete KustoEventhubDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#read KustoEventhubDataConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#update KustoEventhubDataConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#create KustoEventhubDataConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#delete KustoEventhubDataConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#read KustoEventhubDataConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_eventhub_data_connection#update KustoEventhubDataConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoEventhubDataConnectionTimeoutsOutputReference <a name="KustoEventhubDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { kustoEventhubDataConnection } from '@cdktf/provider-azurerm'

new kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KustoEventhubDataConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

---



