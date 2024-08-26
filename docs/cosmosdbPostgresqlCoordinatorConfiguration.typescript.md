# `cosmosdbPostgresqlCoordinatorConfiguration` Submodule <a name="`cosmosdbPostgresqlCoordinatorConfiguration` Submodule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlCoordinatorConfiguration <a name="CosmosdbPostgresqlCoordinatorConfiguration" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration azurerm_cosmosdb_postgresql_coordinator_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCoordinatorConfiguration } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration(scope: Construct, id: string, config: CosmosdbPostgresqlCoordinatorConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig">CosmosdbPostgresqlCoordinatorConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig">CosmosdbPostgresqlCoordinatorConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbPostgresqlCoordinatorConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbPostgresqlCoordinatorConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isConstruct"></a>

```typescript
import { cosmosdbPostgresqlCoordinatorConfiguration } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformElement"></a>

```typescript
import { cosmosdbPostgresqlCoordinatorConfiguration } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformResource"></a>

```typescript
import { cosmosdbPostgresqlCoordinatorConfiguration } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport"></a>

```typescript
import { cosmosdbPostgresqlCoordinatorConfiguration } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CosmosdbPostgresqlCoordinatorConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbPostgresqlCoordinatorConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbPostgresqlCoordinatorConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbPostgresqlCoordinatorConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference">CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference">CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbPostgresqlCoordinatorConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlCoordinatorConfigurationConfig <a name="CosmosdbPostgresqlCoordinatorConfigurationConfig" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCoordinatorConfiguration } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlCoordinatorConfigurationConfig: cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#cluster_id CosmosdbPostgresqlCoordinatorConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#name CosmosdbPostgresqlCoordinatorConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#value CosmosdbPostgresqlCoordinatorConfiguration#value}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#id CosmosdbPostgresqlCoordinatorConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#cluster_id CosmosdbPostgresqlCoordinatorConfiguration#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#name CosmosdbPostgresqlCoordinatorConfiguration#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#value CosmosdbPostgresqlCoordinatorConfiguration#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#id CosmosdbPostgresqlCoordinatorConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbPostgresqlCoordinatorConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#timeouts CosmosdbPostgresqlCoordinatorConfiguration#timeouts}

---

### CosmosdbPostgresqlCoordinatorConfigurationTimeouts <a name="CosmosdbPostgresqlCoordinatorConfigurationTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCoordinatorConfiguration } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlCoordinatorConfigurationTimeouts: cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#create CosmosdbPostgresqlCoordinatorConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#delete CosmosdbPostgresqlCoordinatorConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#read CosmosdbPostgresqlCoordinatorConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#update CosmosdbPostgresqlCoordinatorConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#create CosmosdbPostgresqlCoordinatorConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#delete CosmosdbPostgresqlCoordinatorConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#read CosmosdbPostgresqlCoordinatorConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#update CosmosdbPostgresqlCoordinatorConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference <a name="CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCoordinatorConfiguration } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbPostgresqlCoordinatorConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a>

---



