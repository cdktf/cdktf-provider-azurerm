# `expressRouteConnection` Submodule <a name="`expressRouteConnection` Submodule" id="@cdktf/provider-azurerm.expressRouteConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteConnection <a name="ExpressRouteConnection" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection azurerm_express_route_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

new expressRouteConnection.ExpressRouteConnection(scope: Construct, id: string, config: ExpressRouteConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig">ExpressRouteConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig">ExpressRouteConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetAuthorizationKey">resetAuthorizationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetEnableInternetSecurity">resetEnableInternetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetExpressRouteGatewayBypassEnabled">resetExpressRouteGatewayBypassEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetPrivateLinkFastPathEnabled">resetPrivateLinkFastPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetRouting">resetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetRoutingWeight">resetRoutingWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRouting` <a name="putRouting" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putRouting"></a>

```typescript
public putRouting(value: ExpressRouteConnectionRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: ExpressRouteConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a>

---

##### `resetAuthorizationKey` <a name="resetAuthorizationKey" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetAuthorizationKey"></a>

```typescript
public resetAuthorizationKey(): void
```

##### `resetEnableInternetSecurity` <a name="resetEnableInternetSecurity" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetEnableInternetSecurity"></a>

```typescript
public resetEnableInternetSecurity(): void
```

##### `resetExpressRouteGatewayBypassEnabled` <a name="resetExpressRouteGatewayBypassEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetExpressRouteGatewayBypassEnabled"></a>

```typescript
public resetExpressRouteGatewayBypassEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateLinkFastPathEnabled` <a name="resetPrivateLinkFastPathEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetPrivateLinkFastPathEnabled"></a>

```typescript
public resetPrivateLinkFastPathEnabled(): void
```

##### `resetRouting` <a name="resetRouting" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetRouting"></a>

```typescript
public resetRouting(): void
```

##### `resetRoutingWeight` <a name="resetRoutingWeight" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetRoutingWeight"></a>

```typescript
public resetRoutingWeight(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRouteConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isConstruct"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

expressRouteConnection.ExpressRouteConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformElement"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

expressRouteConnection.ExpressRouteConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformResource"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

expressRouteConnection.ExpressRouteConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

expressRouteConnection.ExpressRouteConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExpressRouteConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExpressRouteConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExpressRouteConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference">ExpressRouteConnectionRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference">ExpressRouteConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.authorizationKeyInput">authorizationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.enableInternetSecurityInput">enableInternetSecurityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteCircuitPeeringIdInput">expressRouteCircuitPeeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayBypassEnabledInput">expressRouteGatewayBypassEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayIdInput">expressRouteGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.privateLinkFastPathEnabledInput">privateLinkFastPathEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingInput">routingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingWeightInput">routingWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.authorizationKey">authorizationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.enableInternetSecurity">enableInternetSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteCircuitPeeringId">expressRouteCircuitPeeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayBypassEnabled">expressRouteGatewayBypassEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayId">expressRouteGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.privateLinkFastPathEnabled">privateLinkFastPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingWeight">routingWeight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routing"></a>

```typescript
public readonly routing: ExpressRouteConnectionRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference">ExpressRouteConnectionRoutingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.timeouts"></a>

```typescript
public readonly timeouts: ExpressRouteConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference">ExpressRouteConnectionTimeoutsOutputReference</a>

---

##### `authorizationKeyInput`<sup>Optional</sup> <a name="authorizationKeyInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.authorizationKeyInput"></a>

```typescript
public readonly authorizationKeyInput: string;
```

- *Type:* string

---

##### `enableInternetSecurityInput`<sup>Optional</sup> <a name="enableInternetSecurityInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.enableInternetSecurityInput"></a>

```typescript
public readonly enableInternetSecurityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressRouteCircuitPeeringIdInput`<sup>Optional</sup> <a name="expressRouteCircuitPeeringIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteCircuitPeeringIdInput"></a>

```typescript
public readonly expressRouteCircuitPeeringIdInput: string;
```

- *Type:* string

---

##### `expressRouteGatewayBypassEnabledInput`<sup>Optional</sup> <a name="expressRouteGatewayBypassEnabledInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayBypassEnabledInput"></a>

```typescript
public readonly expressRouteGatewayBypassEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressRouteGatewayIdInput`<sup>Optional</sup> <a name="expressRouteGatewayIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayIdInput"></a>

```typescript
public readonly expressRouteGatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateLinkFastPathEnabledInput`<sup>Optional</sup> <a name="privateLinkFastPathEnabledInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.privateLinkFastPathEnabledInput"></a>

```typescript
public readonly privateLinkFastPathEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingInput"></a>

```typescript
public readonly routingInput: ExpressRouteConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a>

---

##### `routingWeightInput`<sup>Optional</sup> <a name="routingWeightInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingWeightInput"></a>

```typescript
public readonly routingWeightInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ExpressRouteConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a>

---

##### `authorizationKey`<sup>Required</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.authorizationKey"></a>

```typescript
public readonly authorizationKey: string;
```

- *Type:* string

---

##### `enableInternetSecurity`<sup>Required</sup> <a name="enableInternetSecurity" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.enableInternetSecurity"></a>

```typescript
public readonly enableInternetSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressRouteCircuitPeeringId`<sup>Required</sup> <a name="expressRouteCircuitPeeringId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteCircuitPeeringId"></a>

```typescript
public readonly expressRouteCircuitPeeringId: string;
```

- *Type:* string

---

##### `expressRouteGatewayBypassEnabled`<sup>Required</sup> <a name="expressRouteGatewayBypassEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayBypassEnabled"></a>

```typescript
public readonly expressRouteGatewayBypassEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressRouteGatewayId`<sup>Required</sup> <a name="expressRouteGatewayId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayId"></a>

```typescript
public readonly expressRouteGatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateLinkFastPathEnabled`<sup>Required</sup> <a name="privateLinkFastPathEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.privateLinkFastPathEnabled"></a>

```typescript
public readonly privateLinkFastPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routingWeight`<sup>Required</sup> <a name="routingWeight" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingWeight"></a>

```typescript
public readonly routingWeight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteConnectionConfig <a name="ExpressRouteConnectionConfig" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.Initializer"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

const expressRouteConnectionConfig: expressRouteConnection.ExpressRouteConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteCircuitPeeringId">expressRouteCircuitPeeringId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#express_route_circuit_peering_id ExpressRouteConnection#express_route_circuit_peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteGatewayId">expressRouteGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#express_route_gateway_id ExpressRouteConnection#express_route_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#name ExpressRouteConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.authorizationKey">authorizationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#authorization_key ExpressRouteConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.enableInternetSecurity">enableInternetSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#enable_internet_security ExpressRouteConnection#enable_internet_security}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteGatewayBypassEnabled">expressRouteGatewayBypassEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#express_route_gateway_bypass_enabled ExpressRouteConnection#express_route_gateway_bypass_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#id ExpressRouteConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.privateLinkFastPathEnabled">privateLinkFastPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#private_link_fast_path_enabled ExpressRouteConnection#private_link_fast_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.routingWeight">routingWeight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#routing_weight ExpressRouteConnection#routing_weight}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expressRouteCircuitPeeringId`<sup>Required</sup> <a name="expressRouteCircuitPeeringId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteCircuitPeeringId"></a>

```typescript
public readonly expressRouteCircuitPeeringId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#express_route_circuit_peering_id ExpressRouteConnection#express_route_circuit_peering_id}.

---

##### `expressRouteGatewayId`<sup>Required</sup> <a name="expressRouteGatewayId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteGatewayId"></a>

```typescript
public readonly expressRouteGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#express_route_gateway_id ExpressRouteConnection#express_route_gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#name ExpressRouteConnection#name}.

---

##### `authorizationKey`<sup>Optional</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.authorizationKey"></a>

```typescript
public readonly authorizationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#authorization_key ExpressRouteConnection#authorization_key}.

---

##### `enableInternetSecurity`<sup>Optional</sup> <a name="enableInternetSecurity" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.enableInternetSecurity"></a>

```typescript
public readonly enableInternetSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#enable_internet_security ExpressRouteConnection#enable_internet_security}.

---

##### `expressRouteGatewayBypassEnabled`<sup>Optional</sup> <a name="expressRouteGatewayBypassEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteGatewayBypassEnabled"></a>

```typescript
public readonly expressRouteGatewayBypassEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#express_route_gateway_bypass_enabled ExpressRouteConnection#express_route_gateway_bypass_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#id ExpressRouteConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateLinkFastPathEnabled`<sup>Optional</sup> <a name="privateLinkFastPathEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.privateLinkFastPathEnabled"></a>

```typescript
public readonly privateLinkFastPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#private_link_fast_path_enabled ExpressRouteConnection#private_link_fast_path_enabled}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.routing"></a>

```typescript
public readonly routing: ExpressRouteConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#routing ExpressRouteConnection#routing}

---

##### `routingWeight`<sup>Optional</sup> <a name="routingWeight" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.routingWeight"></a>

```typescript
public readonly routingWeight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#routing_weight ExpressRouteConnection#routing_weight}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ExpressRouteConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#timeouts ExpressRouteConnection#timeouts}

---

### ExpressRouteConnectionRouting <a name="ExpressRouteConnectionRouting" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.Initializer"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

const expressRouteConnectionRouting: expressRouteConnection.ExpressRouteConnectionRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.associatedRouteTableId">associatedRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#associated_route_table_id ExpressRouteConnection#associated_route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#inbound_route_map_id ExpressRouteConnection#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#outbound_route_map_id ExpressRouteConnection#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `associatedRouteTableId`<sup>Optional</sup> <a name="associatedRouteTableId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.associatedRouteTableId"></a>

```typescript
public readonly associatedRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#associated_route_table_id ExpressRouteConnection#associated_route_table_id}.

---

##### `inboundRouteMapId`<sup>Optional</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.inboundRouteMapId"></a>

```typescript
public readonly inboundRouteMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#inbound_route_map_id ExpressRouteConnection#inbound_route_map_id}.

---

##### `outboundRouteMapId`<sup>Optional</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.outboundRouteMapId"></a>

```typescript
public readonly outboundRouteMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#outbound_route_map_id ExpressRouteConnection#outbound_route_map_id}.

---

##### `propagatedRouteTable`<sup>Optional</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.propagatedRouteTable"></a>

```typescript
public readonly propagatedRouteTable: ExpressRouteConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#propagated_route_table ExpressRouteConnection#propagated_route_table}

---

### ExpressRouteConnectionRoutingPropagatedRouteTable <a name="ExpressRouteConnectionRoutingPropagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.Initializer"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

const expressRouteConnectionRoutingPropagatedRouteTable: expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#labels ExpressRouteConnection#labels}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#route_table_ids ExpressRouteConnection#route_table_ids}. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#labels ExpressRouteConnection#labels}.

---

##### `routeTableIds`<sup>Optional</sup> <a name="routeTableIds" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#route_table_ids ExpressRouteConnection#route_table_ids}.

---

### ExpressRouteConnectionTimeouts <a name="ExpressRouteConnectionTimeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.Initializer"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

const expressRouteConnectionTimeouts: expressRouteConnection.ExpressRouteConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#create ExpressRouteConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#delete ExpressRouteConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#read ExpressRouteConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#update ExpressRouteConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#create ExpressRouteConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#delete ExpressRouteConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#read ExpressRouteConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/express_route_connection#update ExpressRouteConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteConnectionRoutingOutputReference <a name="ExpressRouteConnectionRoutingOutputReference" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

new expressRouteConnection.ExpressRouteConnectionRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.putPropagatedRouteTable">putPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetAssociatedRouteTableId">resetAssociatedRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetInboundRouteMapId">resetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetOutboundRouteMapId">resetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetPropagatedRouteTable">resetPropagatedRouteTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropagatedRouteTable` <a name="putPropagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.putPropagatedRouteTable"></a>

```typescript
public putPropagatedRouteTable(value: ExpressRouteConnectionRoutingPropagatedRouteTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a>

---

##### `resetAssociatedRouteTableId` <a name="resetAssociatedRouteTableId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetAssociatedRouteTableId"></a>

```typescript
public resetAssociatedRouteTableId(): void
```

##### `resetInboundRouteMapId` <a name="resetInboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetInboundRouteMapId"></a>

```typescript
public resetInboundRouteMapId(): void
```

##### `resetOutboundRouteMapId` <a name="resetOutboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetOutboundRouteMapId"></a>

```typescript
public resetOutboundRouteMapId(): void
```

##### `resetPropagatedRouteTable` <a name="resetPropagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetPropagatedRouteTable"></a>

```typescript
public resetPropagatedRouteTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference">ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.associatedRouteTableIdInput">associatedRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.inboundRouteMapIdInput">inboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.outboundRouteMapIdInput">outboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.propagatedRouteTableInput">propagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.associatedRouteTableId">associatedRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propagatedRouteTable`<sup>Required</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.propagatedRouteTable"></a>

```typescript
public readonly propagatedRouteTable: ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference">ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference</a>

---

##### `associatedRouteTableIdInput`<sup>Optional</sup> <a name="associatedRouteTableIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.associatedRouteTableIdInput"></a>

```typescript
public readonly associatedRouteTableIdInput: string;
```

- *Type:* string

---

##### `inboundRouteMapIdInput`<sup>Optional</sup> <a name="inboundRouteMapIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.inboundRouteMapIdInput"></a>

```typescript
public readonly inboundRouteMapIdInput: string;
```

- *Type:* string

---

##### `outboundRouteMapIdInput`<sup>Optional</sup> <a name="outboundRouteMapIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.outboundRouteMapIdInput"></a>

```typescript
public readonly outboundRouteMapIdInput: string;
```

- *Type:* string

---

##### `propagatedRouteTableInput`<sup>Optional</sup> <a name="propagatedRouteTableInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.propagatedRouteTableInput"></a>

```typescript
public readonly propagatedRouteTableInput: ExpressRouteConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a>

---

##### `associatedRouteTableId`<sup>Required</sup> <a name="associatedRouteTableId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.associatedRouteTableId"></a>

```typescript
public readonly associatedRouteTableId: string;
```

- *Type:* string

---

##### `inboundRouteMapId`<sup>Required</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.inboundRouteMapId"></a>

```typescript
public readonly inboundRouteMapId: string;
```

- *Type:* string

---

##### `outboundRouteMapId`<sup>Required</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.outboundRouteMapId"></a>

```typescript
public readonly outboundRouteMapId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExpressRouteConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a>

---


### ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference <a name="ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

new expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resetRouteTableIds">resetRouteTableIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRouteTableIds` <a name="resetRouteTableIds" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resetRouteTableIds"></a>

```typescript
public resetRouteTableIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput">routeTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `routeTableIdsInput`<sup>Optional</sup> <a name="routeTableIdsInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput"></a>

```typescript
public readonly routeTableIdsInput: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExpressRouteConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a>

---


### ExpressRouteConnectionTimeoutsOutputReference <a name="ExpressRouteConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { expressRouteConnection } from '@cdktf/provider-azurerm'

new expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExpressRouteConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a>

---



