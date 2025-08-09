# `postgresqlFlexibleServerConfiguration` Submodule <a name="`postgresqlFlexibleServerConfiguration` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServerConfiguration <a name="PostgresqlFlexibleServerConfiguration" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration azurerm_postgresql_flexible_server_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.Initializer"></a>

```typescript
import { postgresqlFlexibleServerConfiguration } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration(scope: Construct, id: string, config: PostgresqlFlexibleServerConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig">PostgresqlFlexibleServerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig">PostgresqlFlexibleServerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: PostgresqlFlexibleServerConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts">PostgresqlFlexibleServerConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlFlexibleServerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isConstruct"></a>

```typescript
import { postgresqlFlexibleServerConfiguration } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isTerraformElement"></a>

```typescript
import { postgresqlFlexibleServerConfiguration } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isTerraformResource"></a>

```typescript
import { postgresqlFlexibleServerConfiguration } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.generateConfigForImport"></a>

```typescript
import { postgresqlFlexibleServerConfiguration } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PostgresqlFlexibleServerConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlFlexibleServerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlFlexibleServerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlFlexibleServerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference">PostgresqlFlexibleServerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts">PostgresqlFlexibleServerConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlFlexibleServerConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference">PostgresqlFlexibleServerConfigurationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PostgresqlFlexibleServerConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts">PostgresqlFlexibleServerConfigurationTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerConfigurationConfig <a name="PostgresqlFlexibleServerConfigurationConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.Initializer"></a>

```typescript
import { postgresqlFlexibleServerConfiguration } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerConfigurationConfig: postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#name PostgresqlFlexibleServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.serverId">serverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#server_id PostgresqlFlexibleServerConfiguration#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#value PostgresqlFlexibleServerConfiguration#value}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#id PostgresqlFlexibleServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts">PostgresqlFlexibleServerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#name PostgresqlFlexibleServerConfiguration#name}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#server_id PostgresqlFlexibleServerConfiguration#server_id}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#value PostgresqlFlexibleServerConfiguration#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#id PostgresqlFlexibleServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlFlexibleServerConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts">PostgresqlFlexibleServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#timeouts PostgresqlFlexibleServerConfiguration#timeouts}

---

### PostgresqlFlexibleServerConfigurationTimeouts <a name="PostgresqlFlexibleServerConfigurationTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.Initializer"></a>

```typescript
import { postgresqlFlexibleServerConfiguration } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerConfigurationTimeouts: postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#create PostgresqlFlexibleServerConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#delete PostgresqlFlexibleServerConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#read PostgresqlFlexibleServerConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#update PostgresqlFlexibleServerConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#create PostgresqlFlexibleServerConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#delete PostgresqlFlexibleServerConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#read PostgresqlFlexibleServerConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/postgresql_flexible_server_configuration#update PostgresqlFlexibleServerConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerConfigurationTimeoutsOutputReference <a name="PostgresqlFlexibleServerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServerConfiguration } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts">PostgresqlFlexibleServerConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresqlFlexibleServerConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerConfiguration.PostgresqlFlexibleServerConfigurationTimeouts">PostgresqlFlexibleServerConfigurationTimeouts</a>

---



