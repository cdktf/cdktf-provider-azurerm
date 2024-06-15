# `cosmosdbPostgresqlNodeConfiguration` Submodule <a name="`cosmosdbPostgresqlNodeConfiguration` Submodule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlNodeConfiguration <a name="CosmosdbPostgresqlNodeConfiguration" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration azurerm_cosmosdb_postgresql_node_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.Initializer"></a>

```typescript
import { cosmosdbPostgresqlNodeConfiguration } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration(scope: Construct, id: string, config: CosmosdbPostgresqlNodeConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig">CosmosdbPostgresqlNodeConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig">CosmosdbPostgresqlNodeConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbPostgresqlNodeConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts">CosmosdbPostgresqlNodeConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbPostgresqlNodeConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isConstruct"></a>

```typescript
import { cosmosdbPostgresqlNodeConfiguration } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isTerraformElement"></a>

```typescript
import { cosmosdbPostgresqlNodeConfiguration } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isTerraformResource"></a>

```typescript
import { cosmosdbPostgresqlNodeConfiguration } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.generateConfigForImport"></a>

```typescript
import { cosmosdbPostgresqlNodeConfiguration } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CosmosdbPostgresqlNodeConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbPostgresqlNodeConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbPostgresqlNodeConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbPostgresqlNodeConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference">CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts">CosmosdbPostgresqlNodeConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference">CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbPostgresqlNodeConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts">CosmosdbPostgresqlNodeConfigurationTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlNodeConfigurationConfig <a name="CosmosdbPostgresqlNodeConfigurationConfig" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.Initializer"></a>

```typescript
import { cosmosdbPostgresqlNodeConfiguration } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlNodeConfigurationConfig: cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#cluster_id CosmosdbPostgresqlNodeConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#name CosmosdbPostgresqlNodeConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#value CosmosdbPostgresqlNodeConfiguration#value}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#id CosmosdbPostgresqlNodeConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts">CosmosdbPostgresqlNodeConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#cluster_id CosmosdbPostgresqlNodeConfiguration#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#name CosmosdbPostgresqlNodeConfiguration#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#value CosmosdbPostgresqlNodeConfiguration#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#id CosmosdbPostgresqlNodeConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbPostgresqlNodeConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts">CosmosdbPostgresqlNodeConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#timeouts CosmosdbPostgresqlNodeConfiguration#timeouts}

---

### CosmosdbPostgresqlNodeConfigurationTimeouts <a name="CosmosdbPostgresqlNodeConfigurationTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.Initializer"></a>

```typescript
import { cosmosdbPostgresqlNodeConfiguration } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlNodeConfigurationTimeouts: cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#create CosmosdbPostgresqlNodeConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#delete CosmosdbPostgresqlNodeConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#read CosmosdbPostgresqlNodeConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#update CosmosdbPostgresqlNodeConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#create CosmosdbPostgresqlNodeConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#delete CosmosdbPostgresqlNodeConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#read CosmosdbPostgresqlNodeConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cosmosdb_postgresql_node_configuration#update CosmosdbPostgresqlNodeConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference <a name="CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbPostgresqlNodeConfiguration } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts">CosmosdbPostgresqlNodeConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbPostgresqlNodeConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlNodeConfiguration.CosmosdbPostgresqlNodeConfigurationTimeouts">CosmosdbPostgresqlNodeConfigurationTimeouts</a>

---



