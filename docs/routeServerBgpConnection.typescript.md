# `routeServerBgpConnection` Submodule <a name="`routeServerBgpConnection` Submodule" id="@cdktf/provider-azurerm.routeServerBgpConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RouteServerBgpConnection <a name="RouteServerBgpConnection" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection azurerm_route_server_bgp_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.Initializer"></a>

```typescript
import { routeServerBgpConnection } from '@cdktf/provider-azurerm'

new routeServerBgpConnection.RouteServerBgpConnection(scope: Construct, id: string, config: RouteServerBgpConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig">RouteServerBgpConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig">RouteServerBgpConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: RouteServerBgpConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts">RouteServerBgpConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RouteServerBgpConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isConstruct"></a>

```typescript
import { routeServerBgpConnection } from '@cdktf/provider-azurerm'

routeServerBgpConnection.RouteServerBgpConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isTerraformElement"></a>

```typescript
import { routeServerBgpConnection } from '@cdktf/provider-azurerm'

routeServerBgpConnection.RouteServerBgpConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isTerraformResource"></a>

```typescript
import { routeServerBgpConnection } from '@cdktf/provider-azurerm'

routeServerBgpConnection.RouteServerBgpConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.generateConfigForImport"></a>

```typescript
import { routeServerBgpConnection } from '@cdktf/provider-azurerm'

routeServerBgpConnection.RouteServerBgpConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RouteServerBgpConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RouteServerBgpConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RouteServerBgpConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RouteServerBgpConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference">RouteServerBgpConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.peerAsnInput">peerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.peerIpInput">peerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.routeServerIdInput">routeServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts">RouteServerBgpConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.peerIp">peerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.routeServerId">routeServerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.timeouts"></a>

```typescript
public readonly timeouts: RouteServerBgpConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference">RouteServerBgpConnectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.peerAsnInput"></a>

```typescript
public readonly peerAsnInput: number;
```

- *Type:* number

---

##### `peerIpInput`<sup>Optional</sup> <a name="peerIpInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.peerIpInput"></a>

```typescript
public readonly peerIpInput: string;
```

- *Type:* string

---

##### `routeServerIdInput`<sup>Optional</sup> <a name="routeServerIdInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.routeServerIdInput"></a>

```typescript
public readonly routeServerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RouteServerBgpConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts">RouteServerBgpConnectionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.peerIp"></a>

```typescript
public readonly peerIp: string;
```

- *Type:* string

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.routeServerId"></a>

```typescript
public readonly routeServerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RouteServerBgpConnectionConfig <a name="RouteServerBgpConnectionConfig" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.Initializer"></a>

```typescript
import { routeServerBgpConnection } from '@cdktf/provider-azurerm'

const routeServerBgpConnectionConfig: routeServerBgpConnection.RouteServerBgpConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#name RouteServerBgpConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.peerAsn">peerAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#peer_asn RouteServerBgpConnection#peer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.peerIp">peerIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#peer_ip RouteServerBgpConnection#peer_ip}. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.routeServerId">routeServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#route_server_id RouteServerBgpConnection#route_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#id RouteServerBgpConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts">RouteServerBgpConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#name RouteServerBgpConnection#name}.

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#peer_asn RouteServerBgpConnection#peer_asn}.

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.peerIp"></a>

```typescript
public readonly peerIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#peer_ip RouteServerBgpConnection#peer_ip}.

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.routeServerId"></a>

```typescript
public readonly routeServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#route_server_id RouteServerBgpConnection#route_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#id RouteServerBgpConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RouteServerBgpConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts">RouteServerBgpConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#timeouts RouteServerBgpConnection#timeouts}

---

### RouteServerBgpConnectionTimeouts <a name="RouteServerBgpConnectionTimeouts" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts.Initializer"></a>

```typescript
import { routeServerBgpConnection } from '@cdktf/provider-azurerm'

const routeServerBgpConnectionTimeouts: routeServerBgpConnection.RouteServerBgpConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#create RouteServerBgpConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#delete RouteServerBgpConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#read RouteServerBgpConnection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#create RouteServerBgpConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#delete RouteServerBgpConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/route_server_bgp_connection#read RouteServerBgpConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### RouteServerBgpConnectionTimeoutsOutputReference <a name="RouteServerBgpConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { routeServerBgpConnection } from '@cdktf/provider-azurerm'

new routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts">RouteServerBgpConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RouteServerBgpConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.routeServerBgpConnection.RouteServerBgpConnectionTimeouts">RouteServerBgpConnectionTimeouts</a>

---



