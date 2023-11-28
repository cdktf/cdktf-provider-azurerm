# `cdnFrontdoorRoute` Submodule <a name="`cdnFrontdoorRoute` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRoute <a name="CdnFrontdoorRoute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route azurerm_cdn_frontdoor_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

new cdnFrontdoorRoute.CdnFrontdoorRoute(scope: Construct, id: string, config: CdnFrontdoorRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig">CdnFrontdoorRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig">CdnFrontdoorRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache">putCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCache">resetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorCustomDomainIds">resetCdnFrontdoorCustomDomainIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorOriginPath">resetCdnFrontdoorOriginPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorRuleSetIds">resetCdnFrontdoorRuleSetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetForwardingProtocol">resetForwardingProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetHttpsRedirectEnabled">resetHttpsRedirectEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetLinkToDefaultDomain">resetLinkToDefaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCache` <a name="putCache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache"></a>

```typescript
public putCache(value: CdnFrontdoorRouteCache): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnFrontdoorRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

---

##### `resetCache` <a name="resetCache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCache"></a>

```typescript
public resetCache(): void
```

##### `resetCdnFrontdoorCustomDomainIds` <a name="resetCdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorCustomDomainIds"></a>

```typescript
public resetCdnFrontdoorCustomDomainIds(): void
```

##### `resetCdnFrontdoorOriginPath` <a name="resetCdnFrontdoorOriginPath" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorOriginPath"></a>

```typescript
public resetCdnFrontdoorOriginPath(): void
```

##### `resetCdnFrontdoorRuleSetIds` <a name="resetCdnFrontdoorRuleSetIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorRuleSetIds"></a>

```typescript
public resetCdnFrontdoorRuleSetIds(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetForwardingProtocol` <a name="resetForwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetForwardingProtocol"></a>

```typescript
public resetForwardingProtocol(): void
```

##### `resetHttpsRedirectEnabled` <a name="resetHttpsRedirectEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetHttpsRedirectEnabled"></a>

```typescript
public resetHttpsRedirectEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLinkToDefaultDomain` <a name="resetLinkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetLinkToDefaultDomain"></a>

```typescript
public resetLinkToDefaultDomain(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CdnFrontdoorRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnFrontdoorRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnFrontdoorRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cache">cache</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference">CdnFrontdoorRouteCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference">CdnFrontdoorRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cacheInput">cacheInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIdsInput">cdnFrontdoorCustomDomainIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointIdInput">cdnFrontdoorEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupIdInput">cdnFrontdoorOriginGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIdsInput">cdnFrontdoorOriginIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPathInput">cdnFrontdoorOriginPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIdsInput">cdnFrontdoorRuleSetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocolInput">forwardingProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabledInput">httpsRedirectEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomainInput">linkToDefaultDomainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatchInput">patternsToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocolsInput">supportedProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIds">cdnFrontdoorCustomDomainIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointId">cdnFrontdoorEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIds">cdnFrontdoorOriginIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPath">cdnFrontdoorOriginPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIds">cdnFrontdoorRuleSetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocol">forwardingProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabled">httpsRedirectEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomain">linkToDefaultDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatch">patternsToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocols">supportedProtocols</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cache"></a>

```typescript
public readonly cache: CdnFrontdoorRouteCacheOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference">CdnFrontdoorRouteCacheOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference">CdnFrontdoorRouteTimeoutsOutputReference</a>

---

##### `cacheInput`<sup>Optional</sup> <a name="cacheInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cacheInput"></a>

```typescript
public readonly cacheInput: CdnFrontdoorRouteCache;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---

##### `cdnFrontdoorCustomDomainIdsInput`<sup>Optional</sup> <a name="cdnFrontdoorCustomDomainIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIdsInput"></a>

```typescript
public readonly cdnFrontdoorCustomDomainIdsInput: string[];
```

- *Type:* string[]

---

##### `cdnFrontdoorEndpointIdInput`<sup>Optional</sup> <a name="cdnFrontdoorEndpointIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointIdInput"></a>

```typescript
public readonly cdnFrontdoorEndpointIdInput: string;
```

- *Type:* string

---

##### `cdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="cdnFrontdoorOriginGroupIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupIdInput"></a>

```typescript
public readonly cdnFrontdoorOriginGroupIdInput: string;
```

- *Type:* string

---

##### `cdnFrontdoorOriginIdsInput`<sup>Optional</sup> <a name="cdnFrontdoorOriginIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIdsInput"></a>

```typescript
public readonly cdnFrontdoorOriginIdsInput: string[];
```

- *Type:* string[]

---

##### `cdnFrontdoorOriginPathInput`<sup>Optional</sup> <a name="cdnFrontdoorOriginPathInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPathInput"></a>

```typescript
public readonly cdnFrontdoorOriginPathInput: string;
```

- *Type:* string

---

##### `cdnFrontdoorRuleSetIdsInput`<sup>Optional</sup> <a name="cdnFrontdoorRuleSetIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIdsInput"></a>

```typescript
public readonly cdnFrontdoorRuleSetIdsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardingProtocolInput`<sup>Optional</sup> <a name="forwardingProtocolInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocolInput"></a>

```typescript
public readonly forwardingProtocolInput: string;
```

- *Type:* string

---

##### `httpsRedirectEnabledInput`<sup>Optional</sup> <a name="httpsRedirectEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabledInput"></a>

```typescript
public readonly httpsRedirectEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkToDefaultDomainInput`<sup>Optional</sup> <a name="linkToDefaultDomainInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomainInput"></a>

```typescript
public readonly linkToDefaultDomainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternsToMatchInput`<sup>Optional</sup> <a name="patternsToMatchInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatchInput"></a>

```typescript
public readonly patternsToMatchInput: string[];
```

- *Type:* string[]

---

##### `supportedProtocolsInput`<sup>Optional</sup> <a name="supportedProtocolsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocolsInput"></a>

```typescript
public readonly supportedProtocolsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CdnFrontdoorRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

---

##### `cdnFrontdoorCustomDomainIds`<sup>Required</sup> <a name="cdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIds"></a>

```typescript
public readonly cdnFrontdoorCustomDomainIds: string[];
```

- *Type:* string[]

---

##### `cdnFrontdoorEndpointId`<sup>Required</sup> <a name="cdnFrontdoorEndpointId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointId"></a>

```typescript
public readonly cdnFrontdoorEndpointId: string;
```

- *Type:* string

---

##### `cdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupId"></a>

```typescript
public readonly cdnFrontdoorOriginGroupId: string;
```

- *Type:* string

---

##### `cdnFrontdoorOriginIds`<sup>Required</sup> <a name="cdnFrontdoorOriginIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIds"></a>

```typescript
public readonly cdnFrontdoorOriginIds: string[];
```

- *Type:* string[]

---

##### `cdnFrontdoorOriginPath`<sup>Required</sup> <a name="cdnFrontdoorOriginPath" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPath"></a>

```typescript
public readonly cdnFrontdoorOriginPath: string;
```

- *Type:* string

---

##### `cdnFrontdoorRuleSetIds`<sup>Required</sup> <a name="cdnFrontdoorRuleSetIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIds"></a>

```typescript
public readonly cdnFrontdoorRuleSetIds: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardingProtocol`<sup>Required</sup> <a name="forwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocol"></a>

```typescript
public readonly forwardingProtocol: string;
```

- *Type:* string

---

##### `httpsRedirectEnabled`<sup>Required</sup> <a name="httpsRedirectEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabled"></a>

```typescript
public readonly httpsRedirectEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkToDefaultDomain`<sup>Required</sup> <a name="linkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomain"></a>

```typescript
public readonly linkToDefaultDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatch"></a>

```typescript
public readonly patternsToMatch: string[];
```

- *Type:* string[]

---

##### `supportedProtocols`<sup>Required</sup> <a name="supportedProtocols" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocols"></a>

```typescript
public readonly supportedProtocols: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRouteCache <a name="CdnFrontdoorRouteCache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.Initializer"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

const cdnFrontdoorRouteCache: cdnFrontdoorRoute.CdnFrontdoorRouteCache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.compressionEnabled">compressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#compression_enabled CdnFrontdoorRoute#compression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.contentTypesToCompress">contentTypesToCompress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#content_types_to_compress CdnFrontdoorRoute#content_types_to_compress}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStringCachingBehavior">queryStringCachingBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#query_string_caching_behavior CdnFrontdoorRoute#query_string_caching_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStrings">queryStrings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#query_strings CdnFrontdoorRoute#query_strings}. |

---

##### `compressionEnabled`<sup>Optional</sup> <a name="compressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.compressionEnabled"></a>

```typescript
public readonly compressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#compression_enabled CdnFrontdoorRoute#compression_enabled}.

---

##### `contentTypesToCompress`<sup>Optional</sup> <a name="contentTypesToCompress" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.contentTypesToCompress"></a>

```typescript
public readonly contentTypesToCompress: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#content_types_to_compress CdnFrontdoorRoute#content_types_to_compress}.

---

##### `queryStringCachingBehavior`<sup>Optional</sup> <a name="queryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStringCachingBehavior"></a>

```typescript
public readonly queryStringCachingBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#query_string_caching_behavior CdnFrontdoorRoute#query_string_caching_behavior}.

---

##### `queryStrings`<sup>Optional</sup> <a name="queryStrings" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStrings"></a>

```typescript
public readonly queryStrings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#query_strings CdnFrontdoorRoute#query_strings}.

---

### CdnFrontdoorRouteConfig <a name="CdnFrontdoorRouteConfig" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.Initializer"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

const cdnFrontdoorRouteConfig: cdnFrontdoorRoute.CdnFrontdoorRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorEndpointId">cdnFrontdoorEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_endpoint_id CdnFrontdoorRoute#cdn_frontdoor_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_group_id CdnFrontdoorRoute#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginIds">cdnFrontdoorOriginIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_ids CdnFrontdoorRoute#cdn_frontdoor_origin_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#name CdnFrontdoorRoute#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.patternsToMatch">patternsToMatch</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#patterns_to_match CdnFrontdoorRoute#patterns_to_match}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.supportedProtocols">supportedProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#supported_protocols CdnFrontdoorRoute#supported_protocols}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cache">cache</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | cache block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorCustomDomainIds">cdnFrontdoorCustomDomainIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_custom_domain_ids CdnFrontdoorRoute#cdn_frontdoor_custom_domain_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginPath">cdnFrontdoorOriginPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_path CdnFrontdoorRoute#cdn_frontdoor_origin_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorRuleSetIds">cdnFrontdoorRuleSetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_rule_set_ids CdnFrontdoorRoute#cdn_frontdoor_rule_set_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#enabled CdnFrontdoorRoute#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forwardingProtocol">forwardingProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#forwarding_protocol CdnFrontdoorRoute#forwarding_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.httpsRedirectEnabled">httpsRedirectEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#https_redirect_enabled CdnFrontdoorRoute#https_redirect_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#id CdnFrontdoorRoute#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.linkToDefaultDomain">linkToDefaultDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#link_to_default_domain CdnFrontdoorRoute#link_to_default_domain}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cdnFrontdoorEndpointId`<sup>Required</sup> <a name="cdnFrontdoorEndpointId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorEndpointId"></a>

```typescript
public readonly cdnFrontdoorEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_endpoint_id CdnFrontdoorRoute#cdn_frontdoor_endpoint_id}.

---

##### `cdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginGroupId"></a>

```typescript
public readonly cdnFrontdoorOriginGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_group_id CdnFrontdoorRoute#cdn_frontdoor_origin_group_id}.

---

##### `cdnFrontdoorOriginIds`<sup>Required</sup> <a name="cdnFrontdoorOriginIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginIds"></a>

```typescript
public readonly cdnFrontdoorOriginIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_ids CdnFrontdoorRoute#cdn_frontdoor_origin_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#name CdnFrontdoorRoute#name}.

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.patternsToMatch"></a>

```typescript
public readonly patternsToMatch: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#patterns_to_match CdnFrontdoorRoute#patterns_to_match}.

---

##### `supportedProtocols`<sup>Required</sup> <a name="supportedProtocols" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.supportedProtocols"></a>

```typescript
public readonly supportedProtocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#supported_protocols CdnFrontdoorRoute#supported_protocols}.

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cache"></a>

```typescript
public readonly cache: CdnFrontdoorRouteCache;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cache CdnFrontdoorRoute#cache}

---

##### `cdnFrontdoorCustomDomainIds`<sup>Optional</sup> <a name="cdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorCustomDomainIds"></a>

```typescript
public readonly cdnFrontdoorCustomDomainIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_custom_domain_ids CdnFrontdoorRoute#cdn_frontdoor_custom_domain_ids}.

---

##### `cdnFrontdoorOriginPath`<sup>Optional</sup> <a name="cdnFrontdoorOriginPath" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginPath"></a>

```typescript
public readonly cdnFrontdoorOriginPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_path CdnFrontdoorRoute#cdn_frontdoor_origin_path}.

---

##### `cdnFrontdoorRuleSetIds`<sup>Optional</sup> <a name="cdnFrontdoorRuleSetIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorRuleSetIds"></a>

```typescript
public readonly cdnFrontdoorRuleSetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_rule_set_ids CdnFrontdoorRoute#cdn_frontdoor_rule_set_ids}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#enabled CdnFrontdoorRoute#enabled}.

---

##### `forwardingProtocol`<sup>Optional</sup> <a name="forwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forwardingProtocol"></a>

```typescript
public readonly forwardingProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#forwarding_protocol CdnFrontdoorRoute#forwarding_protocol}.

---

##### `httpsRedirectEnabled`<sup>Optional</sup> <a name="httpsRedirectEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.httpsRedirectEnabled"></a>

```typescript
public readonly httpsRedirectEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#https_redirect_enabled CdnFrontdoorRoute#https_redirect_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#id CdnFrontdoorRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkToDefaultDomain`<sup>Optional</sup> <a name="linkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.linkToDefaultDomain"></a>

```typescript
public readonly linkToDefaultDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#link_to_default_domain CdnFrontdoorRoute#link_to_default_domain}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorRouteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#timeouts CdnFrontdoorRoute#timeouts}

---

### CdnFrontdoorRouteTimeouts <a name="CdnFrontdoorRouteTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.Initializer"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

const cdnFrontdoorRouteTimeouts: cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#create CdnFrontdoorRoute#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#delete CdnFrontdoorRoute#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#read CdnFrontdoorRoute#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#update CdnFrontdoorRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#create CdnFrontdoorRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#delete CdnFrontdoorRoute#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#read CdnFrontdoorRoute#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route#update CdnFrontdoorRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRouteCacheOutputReference <a name="CdnFrontdoorRouteCacheOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

new cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetCompressionEnabled">resetCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetContentTypesToCompress">resetContentTypesToCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStringCachingBehavior">resetQueryStringCachingBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStrings">resetQueryStrings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompressionEnabled` <a name="resetCompressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetCompressionEnabled"></a>

```typescript
public resetCompressionEnabled(): void
```

##### `resetContentTypesToCompress` <a name="resetContentTypesToCompress" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetContentTypesToCompress"></a>

```typescript
public resetContentTypesToCompress(): void
```

##### `resetQueryStringCachingBehavior` <a name="resetQueryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStringCachingBehavior"></a>

```typescript
public resetQueryStringCachingBehavior(): void
```

##### `resetQueryStrings` <a name="resetQueryStrings" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStrings"></a>

```typescript
public resetQueryStrings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabledInput">compressionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompressInput">contentTypesToCompressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehaviorInput">queryStringCachingBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringsInput">queryStringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabled">compressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompress">contentTypesToCompress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehavior">queryStringCachingBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStrings">queryStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionEnabledInput`<sup>Optional</sup> <a name="compressionEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabledInput"></a>

```typescript
public readonly compressionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentTypesToCompressInput`<sup>Optional</sup> <a name="contentTypesToCompressInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompressInput"></a>

```typescript
public readonly contentTypesToCompressInput: string[];
```

- *Type:* string[]

---

##### `queryStringCachingBehaviorInput`<sup>Optional</sup> <a name="queryStringCachingBehaviorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehaviorInput"></a>

```typescript
public readonly queryStringCachingBehaviorInput: string;
```

- *Type:* string

---

##### `queryStringsInput`<sup>Optional</sup> <a name="queryStringsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringsInput"></a>

```typescript
public readonly queryStringsInput: string[];
```

- *Type:* string[]

---

##### `compressionEnabled`<sup>Required</sup> <a name="compressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabled"></a>

```typescript
public readonly compressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentTypesToCompress`<sup>Required</sup> <a name="contentTypesToCompress" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompress"></a>

```typescript
public readonly contentTypesToCompress: string[];
```

- *Type:* string[]

---

##### `queryStringCachingBehavior`<sup>Required</sup> <a name="queryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehavior"></a>

```typescript
public readonly queryStringCachingBehavior: string;
```

- *Type:* string

---

##### `queryStrings`<sup>Required</sup> <a name="queryStrings" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStrings"></a>

```typescript
public readonly queryStrings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorRouteCache;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---


### CdnFrontdoorRouteTimeoutsOutputReference <a name="CdnFrontdoorRouteTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRoute } from '@cdktf/provider-azurerm'

new cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

---



