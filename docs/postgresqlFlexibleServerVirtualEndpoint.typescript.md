# `postgresqlFlexibleServerVirtualEndpoint` Submodule <a name="`postgresqlFlexibleServerVirtualEndpoint` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServerVirtualEndpoint <a name="PostgresqlFlexibleServerVirtualEndpoint" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint azurerm_postgresql_flexible_server_virtual_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer"></a>

```typescript
import { postgresqlFlexibleServerVirtualEndpoint } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint(scope: Construct, id: string, config: PostgresqlFlexibleServerVirtualEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig">PostgresqlFlexibleServerVirtualEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig">PostgresqlFlexibleServerVirtualEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: PostgresqlFlexibleServerVirtualEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlFlexibleServerVirtualEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isConstruct"></a>

```typescript
import { postgresqlFlexibleServerVirtualEndpoint } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformElement"></a>

```typescript
import { postgresqlFlexibleServerVirtualEndpoint } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformResource"></a>

```typescript
import { postgresqlFlexibleServerVirtualEndpoint } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport"></a>

```typescript
import { postgresqlFlexibleServerVirtualEndpoint } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PostgresqlFlexibleServerVirtualEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlFlexibleServerVirtualEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlFlexibleServerVirtualEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlFlexibleServerVirtualEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference">PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.replicaServerIdInput">replicaServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.sourceServerIdInput">sourceServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.replicaServerId">replicaServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference">PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `replicaServerIdInput`<sup>Optional</sup> <a name="replicaServerIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.replicaServerIdInput"></a>

```typescript
public readonly replicaServerIdInput: string;
```

- *Type:* string

---

##### `sourceServerIdInput`<sup>Optional</sup> <a name="sourceServerIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.sourceServerIdInput"></a>

```typescript
public readonly sourceServerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PostgresqlFlexibleServerVirtualEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replicaServerId`<sup>Required</sup> <a name="replicaServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.replicaServerId"></a>

```typescript
public readonly replicaServerId: string;
```

- *Type:* string

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerVirtualEndpointConfig <a name="PostgresqlFlexibleServerVirtualEndpointConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.Initializer"></a>

```typescript
import { postgresqlFlexibleServerVirtualEndpoint } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerVirtualEndpointConfig: postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.name">name</a></code> | <code>string</code> | The name of the Virtual Endpoint. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.replicaServerId">replicaServerId</a></code> | <code>string</code> | The Resource ID of the *Replica* Postgres Flexible Server this should be associated with. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | The Resource ID of the *Source* Postgres Flexible Server this should be associated with. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.type">type</a></code> | <code>string</code> | The type of Virtual Endpoint. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#id PostgresqlFlexibleServerVirtualEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Virtual Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#name PostgresqlFlexibleServerVirtualEndpoint#name}

---

##### `replicaServerId`<sup>Required</sup> <a name="replicaServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.replicaServerId"></a>

```typescript
public readonly replicaServerId: string;
```

- *Type:* string

The Resource ID of the *Replica* Postgres Flexible Server this should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#replica_server_id PostgresqlFlexibleServerVirtualEndpoint#replica_server_id}

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

The Resource ID of the *Source* Postgres Flexible Server this should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#source_server_id PostgresqlFlexibleServerVirtualEndpoint#source_server_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of Virtual Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#type PostgresqlFlexibleServerVirtualEndpoint#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#id PostgresqlFlexibleServerVirtualEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlFlexibleServerVirtualEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#timeouts PostgresqlFlexibleServerVirtualEndpoint#timeouts}

---

### PostgresqlFlexibleServerVirtualEndpointTimeouts <a name="PostgresqlFlexibleServerVirtualEndpointTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.Initializer"></a>

```typescript
import { postgresqlFlexibleServerVirtualEndpoint } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerVirtualEndpointTimeouts: postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#create PostgresqlFlexibleServerVirtualEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#delete PostgresqlFlexibleServerVirtualEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#read PostgresqlFlexibleServerVirtualEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#update PostgresqlFlexibleServerVirtualEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#create PostgresqlFlexibleServerVirtualEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#delete PostgresqlFlexibleServerVirtualEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#read PostgresqlFlexibleServerVirtualEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/postgresql_flexible_server_virtual_endpoint#update PostgresqlFlexibleServerVirtualEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference <a name="PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServerVirtualEndpoint } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresqlFlexibleServerVirtualEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a>

---



