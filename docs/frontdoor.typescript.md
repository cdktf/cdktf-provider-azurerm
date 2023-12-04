# `frontdoor` Submodule <a name="`frontdoor` Submodule" id="@cdktf/provider-azurerm.frontdoor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Frontdoor <a name="Frontdoor" id="@cdktf/provider-azurerm.frontdoor.Frontdoor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor azurerm_frontdoor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.Frontdoor(scope: Construct, id: string, config: FrontdoorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig">FrontdoorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig">FrontdoorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool">putBackendPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe">putBackendPoolHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing">putBackendPoolLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings">putBackendPoolSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint">putFrontendEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule">putRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings">resetBackendPoolSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled">resetLoadBalancerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackendPool` <a name="putBackendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool"></a>

```typescript
public putBackendPool(value: IResolvable | FrontdoorBackendPool[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>[]

---

##### `putBackendPoolHealthProbe` <a name="putBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe"></a>

```typescript
public putBackendPoolHealthProbe(value: IResolvable | FrontdoorBackendPoolHealthProbe[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>[]

---

##### `putBackendPoolLoadBalancing` <a name="putBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing"></a>

```typescript
public putBackendPoolLoadBalancing(value: IResolvable | FrontdoorBackendPoolLoadBalancing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>[]

---

##### `putBackendPoolSettings` <a name="putBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings"></a>

```typescript
public putBackendPoolSettings(value: IResolvable | FrontdoorBackendPoolSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>[]

---

##### `putFrontendEndpoint` <a name="putFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint"></a>

```typescript
public putFrontendEndpoint(value: IResolvable | FrontdoorFrontendEndpoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>[]

---

##### `putRoutingRule` <a name="putRoutingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule"></a>

```typescript
public putRoutingRule(value: IResolvable | FrontdoorRoutingRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts"></a>

```typescript
public putTimeouts(value: FrontdoorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

---

##### `resetBackendPoolSettings` <a name="resetBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings"></a>

```typescript
public resetBackendPoolSettings(): void
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancerEnabled` <a name="resetLoadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled"></a>

```typescript
public resetLoadBalancerEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

frontdoor.Frontdoor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

frontdoor.Frontdoor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

frontdoor.Frontdoor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

frontdoor.Frontdoor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Frontdoor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Frontdoor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Frontdoor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool">backendPool</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe">backendPoolHealthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes">backendPoolHealthProbes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing">backendPoolLoadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings">backendPoolLoadBalancingSettings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools">backendPools</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings">backendPoolSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname">cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder">explicitResourceOrder</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint">frontendEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints">frontendEndpoints</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId">headerFrontdoorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule">routingRule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules">routingRules</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput">backendPoolHealthProbeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput">backendPoolInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput">backendPoolLoadBalancingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput">backendPoolSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput">frontendEndpointInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput">loadBalancerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput">routingRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled">loadBalancerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendPool`<sup>Required</sup> <a name="backendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool"></a>

```typescript
public readonly backendPool: FrontdoorBackendPoolList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a>

---

##### `backendPoolHealthProbe`<sup>Required</sup> <a name="backendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe"></a>

```typescript
public readonly backendPoolHealthProbe: FrontdoorBackendPoolHealthProbeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a>

---

##### `backendPoolHealthProbes`<sup>Required</sup> <a name="backendPoolHealthProbes" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes"></a>

```typescript
public readonly backendPoolHealthProbes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `backendPoolLoadBalancing`<sup>Required</sup> <a name="backendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing"></a>

```typescript
public readonly backendPoolLoadBalancing: FrontdoorBackendPoolLoadBalancingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a>

---

##### `backendPoolLoadBalancingSettings`<sup>Required</sup> <a name="backendPoolLoadBalancingSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings"></a>

```typescript
public readonly backendPoolLoadBalancingSettings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `backendPools`<sup>Required</sup> <a name="backendPools" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools"></a>

```typescript
public readonly backendPools: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `backendPoolSettings`<sup>Required</sup> <a name="backendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings"></a>

```typescript
public readonly backendPoolSettings: FrontdoorBackendPoolSettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a>

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

---

##### `explicitResourceOrder`<sup>Required</sup> <a name="explicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder"></a>

```typescript
public readonly explicitResourceOrder: FrontdoorExplicitResourceOrderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a>

---

##### `frontendEndpoint`<sup>Required</sup> <a name="frontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint"></a>

```typescript
public readonly frontendEndpoint: FrontdoorFrontendEndpointList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a>

---

##### `frontendEndpoints`<sup>Required</sup> <a name="frontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints"></a>

```typescript
public readonly frontendEndpoints: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `headerFrontdoorId`<sup>Required</sup> <a name="headerFrontdoorId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId"></a>

```typescript
public readonly headerFrontdoorId: string;
```

- *Type:* string

---

##### `routingRule`<sup>Required</sup> <a name="routingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule"></a>

```typescript
public readonly routingRule: FrontdoorRoutingRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a>

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules"></a>

```typescript
public readonly routingRules: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts"></a>

```typescript
public readonly timeouts: FrontdoorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a>

---

##### `backendPoolHealthProbeInput`<sup>Optional</sup> <a name="backendPoolHealthProbeInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput"></a>

```typescript
public readonly backendPoolHealthProbeInput: IResolvable | FrontdoorBackendPoolHealthProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>[]

---

##### `backendPoolInput`<sup>Optional</sup> <a name="backendPoolInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput"></a>

```typescript
public readonly backendPoolInput: IResolvable | FrontdoorBackendPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>[]

---

##### `backendPoolLoadBalancingInput`<sup>Optional</sup> <a name="backendPoolLoadBalancingInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput"></a>

```typescript
public readonly backendPoolLoadBalancingInput: IResolvable | FrontdoorBackendPoolLoadBalancing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>[]

---

##### `backendPoolSettingsInput`<sup>Optional</sup> <a name="backendPoolSettingsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput"></a>

```typescript
public readonly backendPoolSettingsInput: IResolvable | FrontdoorBackendPoolSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>[]

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `frontendEndpointInput`<sup>Optional</sup> <a name="frontendEndpointInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput"></a>

```typescript
public readonly frontendEndpointInput: IResolvable | FrontdoorFrontendEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerEnabledInput`<sup>Optional</sup> <a name="loadBalancerEnabledInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput"></a>

```typescript
public readonly loadBalancerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `routingRuleInput`<sup>Optional</sup> <a name="routingRuleInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput"></a>

```typescript
public readonly routingRuleInput: IResolvable | FrontdoorRoutingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FrontdoorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerEnabled`<sup>Required</sup> <a name="loadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled"></a>

```typescript
public readonly loadBalancerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorBackendPool <a name="FrontdoorBackendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorBackendPool: frontdoor.FrontdoorBackendPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend">backend</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>[]</code> | backend block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName">healthProbeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName">loadBalancingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}. |

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend"></a>

```typescript
public readonly backend: IResolvable | FrontdoorBackendPoolBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>[]

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend Frontdoor#backend}

---

##### `healthProbeName`<sup>Required</sup> <a name="healthProbeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName"></a>

```typescript
public readonly healthProbeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}.

---

##### `loadBalancingName`<sup>Required</sup> <a name="loadBalancingName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName"></a>

```typescript
public readonly loadBalancingName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}.

---

### FrontdoorBackendPoolBackend <a name="FrontdoorBackendPoolBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorBackendPoolBackend: frontdoor.FrontdoorBackendPoolBackend = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#address Frontdoor#address}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader">hostHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#host_header Frontdoor#host_header}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort">httpPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#http_port Frontdoor#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort">httpsPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#https_port Frontdoor#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#priority Frontdoor#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#weight Frontdoor#weight}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#address Frontdoor#address}.

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#host_header Frontdoor#host_header}.

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#http_port Frontdoor#http_port}.

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#https_port Frontdoor#https_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#priority Frontdoor#priority}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#weight Frontdoor#weight}.

---

### FrontdoorBackendPoolHealthProbe <a name="FrontdoorBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorBackendPoolHealthProbe: frontdoor.FrontdoorBackendPoolHealthProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#path Frontdoor#path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod">probeMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#protocol Frontdoor#protocol}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#path Frontdoor#path}.

---

##### `probeMethod`<sup>Optional</sup> <a name="probeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod"></a>

```typescript
public readonly probeMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#protocol Frontdoor#protocol}.

---

### FrontdoorBackendPoolLoadBalancing <a name="FrontdoorBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorBackendPoolLoadBalancing: frontdoor.FrontdoorBackendPoolLoadBalancing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds">additionalLatencyMilliseconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize">sampleSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `additionalLatencyMilliseconds`<sup>Optional</sup> <a name="additionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds"></a>

```typescript
public readonly additionalLatencyMilliseconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}.

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}.

---

##### `successfulSamplesRequired`<sup>Optional</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired"></a>

```typescript
public readonly successfulSamplesRequired: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}.

---

### FrontdoorBackendPoolSettings <a name="FrontdoorBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorBackendPoolSettings: frontdoor.FrontdoorBackendPoolSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck">enforceBackendPoolsCertificateNameCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds">backendPoolsSendReceiveTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}. |

---

##### `enforceBackendPoolsCertificateNameCheck`<sup>Required</sup> <a name="enforceBackendPoolsCertificateNameCheck" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck"></a>

```typescript
public readonly enforceBackendPoolsCertificateNameCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}.

---

##### `backendPoolsSendReceiveTimeoutSeconds`<sup>Optional</sup> <a name="backendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```typescript
public readonly backendPoolsSendReceiveTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}.

---

### FrontdoorConfig <a name="FrontdoorConfig" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorConfig: frontdoor.FrontdoorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool">backendPool</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>[]</code> | backend_pool block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe">backendPoolHealthProbe</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>[]</code> | backend_pool_health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing">backendPoolLoadBalancing</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>[]</code> | backend_pool_load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint">frontendEndpoint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>[]</code> | frontend_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule">routingRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>[]</code> | routing_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings">backendPoolSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>[]</code> | backend_pool_settings block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName">friendlyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#id Frontdoor#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled">loadBalancerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#tags Frontdoor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendPool`<sup>Required</sup> <a name="backendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool"></a>

```typescript
public readonly backendPool: IResolvable | FrontdoorBackendPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>[]

backend_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend_pool Frontdoor#backend_pool}

---

##### `backendPoolHealthProbe`<sup>Required</sup> <a name="backendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe"></a>

```typescript
public readonly backendPoolHealthProbe: IResolvable | FrontdoorBackendPoolHealthProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>[]

backend_pool_health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend_pool_health_probe Frontdoor#backend_pool_health_probe}

---

##### `backendPoolLoadBalancing`<sup>Required</sup> <a name="backendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing"></a>

```typescript
public readonly backendPoolLoadBalancing: IResolvable | FrontdoorBackendPoolLoadBalancing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>[]

backend_pool_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}

---

##### `frontendEndpoint`<sup>Required</sup> <a name="frontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint"></a>

```typescript
public readonly frontendEndpoint: IResolvable | FrontdoorFrontendEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>[]

frontend_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#frontend_endpoint Frontdoor#frontend_endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}.

---

##### `routingRule`<sup>Required</sup> <a name="routingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule"></a>

```typescript
public readonly routingRule: IResolvable | FrontdoorRoutingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>[]

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#routing_rule Frontdoor#routing_rule}

---

##### `backendPoolSettings`<sup>Optional</sup> <a name="backendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings"></a>

```typescript
public readonly backendPoolSettings: IResolvable | FrontdoorBackendPoolSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>[]

backend_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend_pool_settings Frontdoor#backend_pool_settings}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#id Frontdoor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerEnabled`<sup>Optional</sup> <a name="loadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled"></a>

```typescript
public readonly loadBalancerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#tags Frontdoor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FrontdoorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#timeouts Frontdoor#timeouts}

---

### FrontdoorExplicitResourceOrder <a name="FrontdoorExplicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorExplicitResourceOrder: frontdoor.FrontdoorExplicitResourceOrder = { ... }
```


### FrontdoorFrontendEndpoint <a name="FrontdoorFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorFrontendEndpoint: frontdoor.FrontdoorFrontendEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#host_name Frontdoor#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds">sessionAffinityTtlSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId">webApplicationFirewallPolicyLinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#host_name Frontdoor#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `sessionAffinityEnabled`<sup>Optional</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled"></a>

```typescript
public readonly sessionAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}.

---

##### `sessionAffinityTtlSeconds`<sup>Optional</sup> <a name="sessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds"></a>

```typescript
public readonly sessionAffinityTtlSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}.

---

##### `webApplicationFirewallPolicyLinkId`<sup>Optional</sup> <a name="webApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId"></a>

```typescript
public readonly webApplicationFirewallPolicyLinkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}.

---

### FrontdoorRoutingRule <a name="FrontdoorRoutingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorRoutingRule: frontdoor.FrontdoorRoutingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols">acceptedProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints">frontendEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch">patternsToMatch</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration">forwardingConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | forwarding_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration">redirectConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | redirect_configuration block. |

---

##### `acceptedProtocols`<sup>Required</sup> <a name="acceptedProtocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols"></a>

```typescript
public readonly acceptedProtocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}.

---

##### `frontendEndpoints`<sup>Required</sup> <a name="frontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints"></a>

```typescript
public readonly frontendEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch"></a>

```typescript
public readonly patternsToMatch: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `forwardingConfiguration`<sup>Optional</sup> <a name="forwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration"></a>

```typescript
public readonly forwardingConfiguration: FrontdoorRoutingRuleForwardingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

forwarding_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#forwarding_configuration Frontdoor#forwarding_configuration}

---

##### `redirectConfiguration`<sup>Optional</sup> <a name="redirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration"></a>

```typescript
public readonly redirectConfiguration: FrontdoorRoutingRuleRedirectConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

redirect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#redirect_configuration Frontdoor#redirect_configuration}

---

### FrontdoorRoutingRuleForwardingConfiguration <a name="FrontdoorRoutingRuleForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorRoutingRuleForwardingConfiguration: frontdoor.FrontdoorRoutingRuleForwardingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName">backendPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration">cacheDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled">cacheEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters">cacheQueryParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective">cacheQueryParameterStripDirective</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression">cacheUseDynamicCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath">customForwardingPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol">forwardingProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}. |

---

##### `backendPoolName`<sup>Required</sup> <a name="backendPoolName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName"></a>

```typescript
public readonly backendPoolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}.

---

##### `cacheDuration`<sup>Optional</sup> <a name="cacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration"></a>

```typescript
public readonly cacheDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}.

---

##### `cacheEnabled`<sup>Optional</sup> <a name="cacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled"></a>

```typescript
public readonly cacheEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}.

---

##### `cacheQueryParameters`<sup>Optional</sup> <a name="cacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters"></a>

```typescript
public readonly cacheQueryParameters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}.

---

##### `cacheQueryParameterStripDirective`<sup>Optional</sup> <a name="cacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective"></a>

```typescript
public readonly cacheQueryParameterStripDirective: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}.

---

##### `cacheUseDynamicCompression`<sup>Optional</sup> <a name="cacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression"></a>

```typescript
public readonly cacheUseDynamicCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}.

---

##### `customForwardingPath`<sup>Optional</sup> <a name="customForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath"></a>

```typescript
public readonly customForwardingPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}.

---

##### `forwardingProtocol`<sup>Optional</sup> <a name="forwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol"></a>

```typescript
public readonly forwardingProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}.

---

### FrontdoorRoutingRuleRedirectConfiguration <a name="FrontdoorRoutingRuleRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorRoutingRuleRedirectConfiguration: frontdoor.FrontdoorRoutingRuleRedirectConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol">redirectProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType">redirectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment">customFragment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost">customHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath">customPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString">customQueryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}. |

---

##### `redirectProtocol`<sup>Required</sup> <a name="redirectProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol"></a>

```typescript
public readonly redirectProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}.

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType"></a>

```typescript
public readonly redirectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}.

---

##### `customFragment`<sup>Optional</sup> <a name="customFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment"></a>

```typescript
public readonly customFragment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}.

---

##### `customHost`<sup>Optional</sup> <a name="customHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost"></a>

```typescript
public readonly customHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}.

---

##### `customPath`<sup>Optional</sup> <a name="customPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath"></a>

```typescript
public readonly customPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}.

---

##### `customQueryString`<sup>Optional</sup> <a name="customQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString"></a>

```typescript
public readonly customQueryString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}.

---

### FrontdoorTimeouts <a name="FrontdoorTimeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

const frontdoorTimeouts: frontdoor.FrontdoorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#create Frontdoor#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#delete Frontdoor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#read Frontdoor#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#update Frontdoor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#create Frontdoor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#delete Frontdoor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#read Frontdoor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/frontdoor#update Frontdoor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorBackendPoolBackendList <a name="FrontdoorBackendPoolBackendList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolBackendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get"></a>

```typescript
public get(index: number): FrontdoorBackendPoolBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPoolBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>[]

---


### FrontdoorBackendPoolBackendOutputReference <a name="FrontdoorBackendPoolBackendOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput">hostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput">httpPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput">httpsPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader">hostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort">httpPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort">httpsPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostHeaderInput`<sup>Optional</sup> <a name="hostHeaderInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput"></a>

```typescript
public readonly hostHeaderInput: string;
```

- *Type:* string

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput"></a>

```typescript
public readonly httpPortInput: number;
```

- *Type:* number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput"></a>

```typescript
public readonly httpsPortInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPoolBackend;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>

---


### FrontdoorBackendPoolHealthProbeList <a name="FrontdoorBackendPoolHealthProbeList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolHealthProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get"></a>

```typescript
public get(index: number): FrontdoorBackendPoolHealthProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPoolHealthProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>[]

---


### FrontdoorBackendPoolHealthProbeOutputReference <a name="FrontdoorBackendPoolHealthProbeOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolHealthProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod">resetProbeMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds"></a>

```typescript
public resetIntervalInSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetProbeMethod` <a name="resetProbeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod"></a>

```typescript
public resetProbeMethod(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput">probeMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod">probeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```typescript
public readonly intervalInSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `probeMethodInput`<sup>Optional</sup> <a name="probeMethodInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput"></a>

```typescript
public readonly probeMethodInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `probeMethod`<sup>Required</sup> <a name="probeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod"></a>

```typescript
public readonly probeMethod: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPoolHealthProbe;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe">FrontdoorBackendPoolHealthProbe</a>

---


### FrontdoorBackendPoolList <a name="FrontdoorBackendPoolList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get"></a>

```typescript
public get(index: number): FrontdoorBackendPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>[]

---


### FrontdoorBackendPoolLoadBalancingList <a name="FrontdoorBackendPoolLoadBalancingList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolLoadBalancingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get"></a>

```typescript
public get(index: number): FrontdoorBackendPoolLoadBalancingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPoolLoadBalancing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>[]

---


### FrontdoorBackendPoolLoadBalancingOutputReference <a name="FrontdoorBackendPoolLoadBalancingOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds">resetAdditionalLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired">resetSuccessfulSamplesRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalLatencyMilliseconds` <a name="resetAdditionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds"></a>

```typescript
public resetAdditionalLatencyMilliseconds(): void
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize"></a>

```typescript
public resetSampleSize(): void
```

##### `resetSuccessfulSamplesRequired` <a name="resetSuccessfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```typescript
public resetSuccessfulSamplesRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput">additionalLatencyMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput">successfulSamplesRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds">additionalLatencyMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize">sampleSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `additionalLatencyMillisecondsInput`<sup>Optional</sup> <a name="additionalLatencyMillisecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput"></a>

```typescript
public readonly additionalLatencyMillisecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput"></a>

```typescript
public readonly sampleSizeInput: number;
```

- *Type:* number

---

##### `successfulSamplesRequiredInput`<sup>Optional</sup> <a name="successfulSamplesRequiredInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```typescript
public readonly successfulSamplesRequiredInput: number;
```

- *Type:* number

---

##### `additionalLatencyMilliseconds`<sup>Required</sup> <a name="additionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds"></a>

```typescript
public readonly additionalLatencyMilliseconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

---

##### `successfulSamplesRequired`<sup>Required</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```typescript
public readonly successfulSamplesRequired: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPoolLoadBalancing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing">FrontdoorBackendPoolLoadBalancing</a>

---


### FrontdoorBackendPoolOutputReference <a name="FrontdoorBackendPoolOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend">putBackend</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackend` <a name="putBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend"></a>

```typescript
public putBackend(value: IResolvable | FrontdoorBackendPoolBackend[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput">backendInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput">healthProbeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput">loadBalancingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName">healthProbeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName">loadBalancingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend"></a>

```typescript
public readonly backend: FrontdoorBackendPoolBackendList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput"></a>

```typescript
public readonly backendInput: IResolvable | FrontdoorBackendPoolBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend">FrontdoorBackendPoolBackend</a>[]

---

##### `healthProbeNameInput`<sup>Optional</sup> <a name="healthProbeNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput"></a>

```typescript
public readonly healthProbeNameInput: string;
```

- *Type:* string

---

##### `loadBalancingNameInput`<sup>Optional</sup> <a name="loadBalancingNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput"></a>

```typescript
public readonly loadBalancingNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `healthProbeName`<sup>Required</sup> <a name="healthProbeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName"></a>

```typescript
public readonly healthProbeName: string;
```

- *Type:* string

---

##### `loadBalancingName`<sup>Required</sup> <a name="loadBalancingName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName"></a>

```typescript
public readonly loadBalancingName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPool;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool">FrontdoorBackendPool</a>

---


### FrontdoorBackendPoolSettingsList <a name="FrontdoorBackendPoolSettingsList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get"></a>

```typescript
public get(index: number): FrontdoorBackendPoolSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPoolSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>[]

---


### FrontdoorBackendPoolSettingsOutputReference <a name="FrontdoorBackendPoolSettingsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorBackendPoolSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds">resetBackendPoolsSendReceiveTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPoolsSendReceiveTimeoutSeconds` <a name="resetBackendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds"></a>

```typescript
public resetBackendPoolsSendReceiveTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput">backendPoolsSendReceiveTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput">enforceBackendPoolsCertificateNameCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds">backendPoolsSendReceiveTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck">enforceBackendPoolsCertificateNameCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendPoolsSendReceiveTimeoutSecondsInput`<sup>Optional</sup> <a name="backendPoolsSendReceiveTimeoutSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput"></a>

```typescript
public readonly backendPoolsSendReceiveTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `enforceBackendPoolsCertificateNameCheckInput`<sup>Optional</sup> <a name="enforceBackendPoolsCertificateNameCheckInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput"></a>

```typescript
public readonly enforceBackendPoolsCertificateNameCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendPoolsSendReceiveTimeoutSeconds`<sup>Required</sup> <a name="backendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```typescript
public readonly backendPoolsSendReceiveTimeoutSeconds: number;
```

- *Type:* number

---

##### `enforceBackendPoolsCertificateNameCheck`<sup>Required</sup> <a name="enforceBackendPoolsCertificateNameCheck" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck"></a>

```typescript
public readonly enforceBackendPoolsCertificateNameCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorBackendPoolSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings">FrontdoorBackendPoolSettings</a>

---


### FrontdoorExplicitResourceOrderList <a name="FrontdoorExplicitResourceOrderList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorExplicitResourceOrderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get"></a>

```typescript
public get(index: number): FrontdoorExplicitResourceOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FrontdoorExplicitResourceOrderOutputReference <a name="FrontdoorExplicitResourceOrderOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorExplicitResourceOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds">backendPoolHealthProbeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds">backendPoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds">backendPoolLoadBalancingIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds">frontendEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds">routingRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendPoolHealthProbeIds`<sup>Required</sup> <a name="backendPoolHealthProbeIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds"></a>

```typescript
public readonly backendPoolHealthProbeIds: string[];
```

- *Type:* string[]

---

##### `backendPoolIds`<sup>Required</sup> <a name="backendPoolIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds"></a>

```typescript
public readonly backendPoolIds: string[];
```

- *Type:* string[]

---

##### `backendPoolLoadBalancingIds`<sup>Required</sup> <a name="backendPoolLoadBalancingIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds"></a>

```typescript
public readonly backendPoolLoadBalancingIds: string[];
```

- *Type:* string[]

---

##### `frontendEndpointIds`<sup>Required</sup> <a name="frontendEndpointIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds"></a>

```typescript
public readonly frontendEndpointIds: string[];
```

- *Type:* string[]

---

##### `routingRuleIds`<sup>Required</sup> <a name="routingRuleIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds"></a>

```typescript
public readonly routingRuleIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorExplicitResourceOrder;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a>

---


### FrontdoorFrontendEndpointList <a name="FrontdoorFrontendEndpointList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorFrontendEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get"></a>

```typescript
public get(index: number): FrontdoorFrontendEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFrontendEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>[]

---


### FrontdoorFrontendEndpointOutputReference <a name="FrontdoorFrontendEndpointOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorFrontendEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled">resetSessionAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds">resetSessionAffinityTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId">resetWebApplicationFirewallPolicyLinkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSessionAffinityEnabled` <a name="resetSessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled"></a>

```typescript
public resetSessionAffinityEnabled(): void
```

##### `resetSessionAffinityTtlSeconds` <a name="resetSessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds"></a>

```typescript
public resetSessionAffinityTtlSeconds(): void
```

##### `resetWebApplicationFirewallPolicyLinkId` <a name="resetWebApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId"></a>

```typescript
public resetWebApplicationFirewallPolicyLinkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput">sessionAffinityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput">sessionAffinityTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput">webApplicationFirewallPolicyLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds">sessionAffinityTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId">webApplicationFirewallPolicyLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sessionAffinityEnabledInput`<sup>Optional</sup> <a name="sessionAffinityEnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput"></a>

```typescript
public readonly sessionAffinityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionAffinityTtlSecondsInput`<sup>Optional</sup> <a name="sessionAffinityTtlSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput"></a>

```typescript
public readonly sessionAffinityTtlSecondsInput: number;
```

- *Type:* number

---

##### `webApplicationFirewallPolicyLinkIdInput`<sup>Optional</sup> <a name="webApplicationFirewallPolicyLinkIdInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput"></a>

```typescript
public readonly webApplicationFirewallPolicyLinkIdInput: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sessionAffinityEnabled`<sup>Required</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled"></a>

```typescript
public readonly sessionAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionAffinityTtlSeconds`<sup>Required</sup> <a name="sessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds"></a>

```typescript
public readonly sessionAffinityTtlSeconds: number;
```

- *Type:* number

---

##### `webApplicationFirewallPolicyLinkId`<sup>Required</sup> <a name="webApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId"></a>

```typescript
public readonly webApplicationFirewallPolicyLinkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFrontendEndpoint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint">FrontdoorFrontendEndpoint</a>

---


### FrontdoorRoutingRuleForwardingConfigurationOutputReference <a name="FrontdoorRoutingRuleForwardingConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration">resetCacheDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled">resetCacheEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters">resetCacheQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective">resetCacheQueryParameterStripDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression">resetCacheUseDynamicCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath">resetCustomForwardingPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol">resetForwardingProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheDuration` <a name="resetCacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration"></a>

```typescript
public resetCacheDuration(): void
```

##### `resetCacheEnabled` <a name="resetCacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled"></a>

```typescript
public resetCacheEnabled(): void
```

##### `resetCacheQueryParameters` <a name="resetCacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters"></a>

```typescript
public resetCacheQueryParameters(): void
```

##### `resetCacheQueryParameterStripDirective` <a name="resetCacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective"></a>

```typescript
public resetCacheQueryParameterStripDirective(): void
```

##### `resetCacheUseDynamicCompression` <a name="resetCacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression"></a>

```typescript
public resetCacheUseDynamicCompression(): void
```

##### `resetCustomForwardingPath` <a name="resetCustomForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath"></a>

```typescript
public resetCustomForwardingPath(): void
```

##### `resetForwardingProtocol` <a name="resetForwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol"></a>

```typescript
public resetForwardingProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput">backendPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput">cacheDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput">cacheEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput">cacheQueryParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput">cacheQueryParameterStripDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput">cacheUseDynamicCompressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput">customForwardingPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput">forwardingProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName">backendPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration">cacheDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled">cacheEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters">cacheQueryParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective">cacheQueryParameterStripDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression">cacheUseDynamicCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath">customForwardingPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol">forwardingProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendPoolNameInput`<sup>Optional</sup> <a name="backendPoolNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput"></a>

```typescript
public readonly backendPoolNameInput: string;
```

- *Type:* string

---

##### `cacheDurationInput`<sup>Optional</sup> <a name="cacheDurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput"></a>

```typescript
public readonly cacheDurationInput: string;
```

- *Type:* string

---

##### `cacheEnabledInput`<sup>Optional</sup> <a name="cacheEnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput"></a>

```typescript
public readonly cacheEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheQueryParametersInput`<sup>Optional</sup> <a name="cacheQueryParametersInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput"></a>

```typescript
public readonly cacheQueryParametersInput: string[];
```

- *Type:* string[]

---

##### `cacheQueryParameterStripDirectiveInput`<sup>Optional</sup> <a name="cacheQueryParameterStripDirectiveInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput"></a>

```typescript
public readonly cacheQueryParameterStripDirectiveInput: string;
```

- *Type:* string

---

##### `cacheUseDynamicCompressionInput`<sup>Optional</sup> <a name="cacheUseDynamicCompressionInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput"></a>

```typescript
public readonly cacheUseDynamicCompressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customForwardingPathInput`<sup>Optional</sup> <a name="customForwardingPathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput"></a>

```typescript
public readonly customForwardingPathInput: string;
```

- *Type:* string

---

##### `forwardingProtocolInput`<sup>Optional</sup> <a name="forwardingProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput"></a>

```typescript
public readonly forwardingProtocolInput: string;
```

- *Type:* string

---

##### `backendPoolName`<sup>Required</sup> <a name="backendPoolName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName"></a>

```typescript
public readonly backendPoolName: string;
```

- *Type:* string

---

##### `cacheDuration`<sup>Required</sup> <a name="cacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration"></a>

```typescript
public readonly cacheDuration: string;
```

- *Type:* string

---

##### `cacheEnabled`<sup>Required</sup> <a name="cacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled"></a>

```typescript
public readonly cacheEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheQueryParameters`<sup>Required</sup> <a name="cacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters"></a>

```typescript
public readonly cacheQueryParameters: string[];
```

- *Type:* string[]

---

##### `cacheQueryParameterStripDirective`<sup>Required</sup> <a name="cacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective"></a>

```typescript
public readonly cacheQueryParameterStripDirective: string;
```

- *Type:* string

---

##### `cacheUseDynamicCompression`<sup>Required</sup> <a name="cacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression"></a>

```typescript
public readonly cacheUseDynamicCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customForwardingPath`<sup>Required</sup> <a name="customForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath"></a>

```typescript
public readonly customForwardingPath: string;
```

- *Type:* string

---

##### `forwardingProtocol`<sup>Required</sup> <a name="forwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol"></a>

```typescript
public readonly forwardingProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorRoutingRuleForwardingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---


### FrontdoorRoutingRuleList <a name="FrontdoorRoutingRuleList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorRoutingRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get"></a>

```typescript
public get(index: number): FrontdoorRoutingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorRoutingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>[]

---


### FrontdoorRoutingRuleOutputReference <a name="FrontdoorRoutingRuleOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorRoutingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration">putForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration">putRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration">resetForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration">resetRedirectConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardingConfiguration` <a name="putForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration"></a>

```typescript
public putForwardingConfiguration(value: FrontdoorRoutingRuleForwardingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `putRedirectConfiguration` <a name="putRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration"></a>

```typescript
public putRedirectConfiguration(value: FrontdoorRoutingRuleRedirectConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetForwardingConfiguration` <a name="resetForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration"></a>

```typescript
public resetForwardingConfiguration(): void
```

##### `resetRedirectConfiguration` <a name="resetRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration"></a>

```typescript
public resetRedirectConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration">forwardingConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration">redirectConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput">acceptedProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput">forwardingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput">frontendEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput">patternsToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput">redirectConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols">acceptedProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints">frontendEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch">patternsToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardingConfiguration`<sup>Required</sup> <a name="forwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration"></a>

```typescript
public readonly forwardingConfiguration: FrontdoorRoutingRuleForwardingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `redirectConfiguration`<sup>Required</sup> <a name="redirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration"></a>

```typescript
public readonly redirectConfiguration: FrontdoorRoutingRuleRedirectConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a>

---

##### `acceptedProtocolsInput`<sup>Optional</sup> <a name="acceptedProtocolsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput"></a>

```typescript
public readonly acceptedProtocolsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardingConfigurationInput`<sup>Optional</sup> <a name="forwardingConfigurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput"></a>

```typescript
public readonly forwardingConfigurationInput: FrontdoorRoutingRuleForwardingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `frontendEndpointsInput`<sup>Optional</sup> <a name="frontendEndpointsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput"></a>

```typescript
public readonly frontendEndpointsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternsToMatchInput`<sup>Optional</sup> <a name="patternsToMatchInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput"></a>

```typescript
public readonly patternsToMatchInput: string[];
```

- *Type:* string[]

---

##### `redirectConfigurationInput`<sup>Optional</sup> <a name="redirectConfigurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput"></a>

```typescript
public readonly redirectConfigurationInput: FrontdoorRoutingRuleRedirectConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `acceptedProtocols`<sup>Required</sup> <a name="acceptedProtocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols"></a>

```typescript
public readonly acceptedProtocols: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frontendEndpoints`<sup>Required</sup> <a name="frontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints"></a>

```typescript
public readonly frontendEndpoints: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch"></a>

```typescript
public readonly patternsToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorRoutingRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule">FrontdoorRoutingRule</a>

---


### FrontdoorRoutingRuleRedirectConfigurationOutputReference <a name="FrontdoorRoutingRuleRedirectConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment">resetCustomFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost">resetCustomHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath">resetCustomPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString">resetCustomQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomFragment` <a name="resetCustomFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment"></a>

```typescript
public resetCustomFragment(): void
```

##### `resetCustomHost` <a name="resetCustomHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost"></a>

```typescript
public resetCustomHost(): void
```

##### `resetCustomPath` <a name="resetCustomPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath"></a>

```typescript
public resetCustomPath(): void
```

##### `resetCustomQueryString` <a name="resetCustomQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString"></a>

```typescript
public resetCustomQueryString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput">customFragmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput">customHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput">customPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput">customQueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput">redirectProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput">redirectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment">customFragment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost">customHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath">customPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString">customQueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol">redirectProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType">redirectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customFragmentInput`<sup>Optional</sup> <a name="customFragmentInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput"></a>

```typescript
public readonly customFragmentInput: string;
```

- *Type:* string

---

##### `customHostInput`<sup>Optional</sup> <a name="customHostInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput"></a>

```typescript
public readonly customHostInput: string;
```

- *Type:* string

---

##### `customPathInput`<sup>Optional</sup> <a name="customPathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput"></a>

```typescript
public readonly customPathInput: string;
```

- *Type:* string

---

##### `customQueryStringInput`<sup>Optional</sup> <a name="customQueryStringInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput"></a>

```typescript
public readonly customQueryStringInput: string;
```

- *Type:* string

---

##### `redirectProtocolInput`<sup>Optional</sup> <a name="redirectProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput"></a>

```typescript
public readonly redirectProtocolInput: string;
```

- *Type:* string

---

##### `redirectTypeInput`<sup>Optional</sup> <a name="redirectTypeInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput"></a>

```typescript
public readonly redirectTypeInput: string;
```

- *Type:* string

---

##### `customFragment`<sup>Required</sup> <a name="customFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment"></a>

```typescript
public readonly customFragment: string;
```

- *Type:* string

---

##### `customHost`<sup>Required</sup> <a name="customHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost"></a>

```typescript
public readonly customHost: string;
```

- *Type:* string

---

##### `customPath`<sup>Required</sup> <a name="customPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath"></a>

```typescript
public readonly customPath: string;
```

- *Type:* string

---

##### `customQueryString`<sup>Required</sup> <a name="customQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString"></a>

```typescript
public readonly customQueryString: string;
```

- *Type:* string

---

##### `redirectProtocol`<sup>Required</sup> <a name="redirectProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol"></a>

```typescript
public readonly redirectProtocol: string;
```

- *Type:* string

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType"></a>

```typescript
public readonly redirectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorRoutingRuleRedirectConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---


### FrontdoorTimeoutsOutputReference <a name="FrontdoorTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer"></a>

```typescript
import { frontdoor } from '@cdktf/provider-azurerm'

new frontdoor.FrontdoorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

---



