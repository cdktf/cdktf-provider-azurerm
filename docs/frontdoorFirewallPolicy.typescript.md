# `frontdoorFirewallPolicy` Submodule <a name="`frontdoorFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorFirewallPolicy <a name="FrontdoorFirewallPolicy" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy azurerm_frontdoor_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicy(scope: Construct, id: string, config: FrontdoorFirewallPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig">FrontdoorFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig">FrontdoorFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule">putCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule">putManagedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseBody">resetCustomBlockResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode">resetCustomBlockResponseStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomRule">resetCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetManagedRule">resetManagedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomRule` <a name="putCustomRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule"></a>

```typescript
public putCustomRule(value: IResolvable | FrontdoorFirewallPolicyCustomRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>[]

---

##### `putManagedRule` <a name="putManagedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule"></a>

```typescript
public putManagedRule(value: IResolvable | FrontdoorFirewallPolicyManagedRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: FrontdoorFirewallPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

---

##### `resetCustomBlockResponseBody` <a name="resetCustomBlockResponseBody" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseBody"></a>

```typescript
public resetCustomBlockResponseBody(): void
```

##### `resetCustomBlockResponseStatusCode` <a name="resetCustomBlockResponseStatusCode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode"></a>

```typescript
public resetCustomBlockResponseStatusCode(): void
```

##### `resetCustomRule` <a name="resetCustomRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomRule"></a>

```typescript
public resetCustomRule(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedRule` <a name="resetManagedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetManagedRule"></a>

```typescript
public resetManagedRule(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetRedirectUrl"></a>

```typescript
public resetRedirectUrl(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FrontdoorFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FrontdoorFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FrontdoorFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FrontdoorFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FrontdoorFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRule">customRule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList">FrontdoorFirewallPolicyCustomRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.frontendEndpointIds">frontendEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRule">managedRule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList">FrontdoorFirewallPolicyManagedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference">FrontdoorFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBodyInput">customBlockResponseBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput">customBlockResponseStatusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRuleInput">customRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRuleInput">managedRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrlInput">redirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBody">customBlockResponseBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCode">customBlockResponseStatusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customRule`<sup>Required</sup> <a name="customRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRule"></a>

```typescript
public readonly customRule: FrontdoorFirewallPolicyCustomRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList">FrontdoorFirewallPolicyCustomRuleList</a>

---

##### `frontendEndpointIds`<sup>Required</sup> <a name="frontendEndpointIds" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.frontendEndpointIds"></a>

```typescript
public readonly frontendEndpointIds: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedRule`<sup>Required</sup> <a name="managedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRule"></a>

```typescript
public readonly managedRule: FrontdoorFirewallPolicyManagedRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList">FrontdoorFirewallPolicyManagedRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: FrontdoorFirewallPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference">FrontdoorFirewallPolicyTimeoutsOutputReference</a>

---

##### `customBlockResponseBodyInput`<sup>Optional</sup> <a name="customBlockResponseBodyInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBodyInput"></a>

```typescript
public readonly customBlockResponseBodyInput: string;
```

- *Type:* string

---

##### `customBlockResponseStatusCodeInput`<sup>Optional</sup> <a name="customBlockResponseStatusCodeInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput"></a>

```typescript
public readonly customBlockResponseStatusCodeInput: number;
```

- *Type:* number

---

##### `customRuleInput`<sup>Optional</sup> <a name="customRuleInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRuleInput"></a>

```typescript
public readonly customRuleInput: IResolvable | FrontdoorFirewallPolicyCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedRuleInput`<sup>Optional</sup> <a name="managedRuleInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRuleInput"></a>

```typescript
public readonly managedRuleInput: IResolvable | FrontdoorFirewallPolicyManagedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>[]

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FrontdoorFirewallPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

---

##### `customBlockResponseBody`<sup>Required</sup> <a name="customBlockResponseBody" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBody"></a>

```typescript
public readonly customBlockResponseBody: string;
```

- *Type:* string

---

##### `customBlockResponseStatusCode`<sup>Required</sup> <a name="customBlockResponseStatusCode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCode"></a>

```typescript
public readonly customBlockResponseStatusCode: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorFirewallPolicyConfig <a name="FrontdoorFirewallPolicyConfig" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyConfig: frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseBody">customBlockResponseBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode">customBlockResponseStatusCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customRule">customRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>[]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.managedRule">managedRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>[]</code> | managed_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}.

---

##### `customBlockResponseBody`<sup>Optional</sup> <a name="customBlockResponseBody" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseBody"></a>

```typescript
public readonly customBlockResponseBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}.

---

##### `customBlockResponseStatusCode`<sup>Optional</sup> <a name="customBlockResponseStatusCode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode"></a>

```typescript
public readonly customBlockResponseStatusCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}.

---

##### `customRule`<sup>Optional</sup> <a name="customRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customRule"></a>

```typescript
public readonly customRule: IResolvable | FrontdoorFirewallPolicyCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>[]

custom_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#custom_rule FrontdoorFirewallPolicy#custom_rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedRule`<sup>Optional</sup> <a name="managedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.managedRule"></a>

```typescript
public readonly managedRule: IResolvable | FrontdoorFirewallPolicyManagedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>[]

managed_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#managed_rule FrontdoorFirewallPolicy#managed_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FrontdoorFirewallPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#timeouts FrontdoorFirewallPolicy#timeouts}

---

### FrontdoorFirewallPolicyCustomRule <a name="FrontdoorFirewallPolicyCustomRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyCustomRule: frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.matchCondition">matchCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]</code> | match_condition block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#priority FrontdoorFirewallPolicy#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes">rateLimitDurationInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rate_limit_duration_in_minutes FrontdoorFirewallPolicy#rate_limit_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rate_limit_threshold FrontdoorFirewallPolicy#rate_limit_threshold}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `matchCondition`<sup>Optional</sup> <a name="matchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.matchCondition"></a>

```typescript
public readonly matchCondition: IResolvable | FrontdoorFirewallPolicyCustomRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_condition FrontdoorFirewallPolicy#match_condition}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#priority FrontdoorFirewallPolicy#priority}.

---

##### `rateLimitDurationInMinutes`<sup>Optional</sup> <a name="rateLimitDurationInMinutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes"></a>

```typescript
public readonly rateLimitDurationInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rate_limit_duration_in_minutes FrontdoorFirewallPolicy#rate_limit_duration_in_minutes}.

---

##### `rateLimitThreshold`<sup>Optional</sup> <a name="rateLimitThreshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rate_limit_threshold FrontdoorFirewallPolicy#rate_limit_threshold}.

---

### FrontdoorFirewallPolicyCustomRuleMatchCondition <a name="FrontdoorFirewallPolicyCustomRuleMatchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyCustomRuleMatchCondition: frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_values FrontdoorFirewallPolicy#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable">matchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition">negationCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#negation_condition FrontdoorFirewallPolicy#negation_condition}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#transforms FrontdoorFirewallPolicy#transforms}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_values FrontdoorFirewallPolicy#match_values}.

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `negationCondition`<sup>Optional</sup> <a name="negationCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition"></a>

```typescript
public readonly negationCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#negation_condition FrontdoorFirewallPolicy#negation_condition}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#transforms FrontdoorFirewallPolicy#transforms}.

---

### FrontdoorFirewallPolicyManagedRule <a name="FrontdoorFirewallPolicyManagedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyManagedRule: frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#version FrontdoorFirewallPolicy#version}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.exclusion">exclusion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>[]</code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.override">override</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>[]</code> | override block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#version FrontdoorFirewallPolicy#version}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | FrontdoorFirewallPolicyManagedRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.override"></a>

```typescript
public readonly override: IResolvable | FrontdoorFirewallPolicyManagedRuleOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>[]

override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#override FrontdoorFirewallPolicy#override}

---

### FrontdoorFirewallPolicyManagedRuleExclusion <a name="FrontdoorFirewallPolicyManagedRuleExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyManagedRuleExclusion: frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable">matchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyManagedRuleOverride <a name="FrontdoorFirewallPolicyManagedRuleOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyManagedRuleOverride: frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName">ruleGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rule_group_name FrontdoorFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.exclusion">exclusion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]</code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]</code> | rule block. |

---

##### `ruleGroupName`<sup>Required</sup> <a name="ruleGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName"></a>

```typescript
public readonly ruleGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rule_group_name FrontdoorFirewallPolicy#rule_group_name}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.rule"></a>

```typescript
public readonly rule: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rule FrontdoorFirewallPolicy#rule}

---

### FrontdoorFirewallPolicyManagedRuleOverrideExclusion <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyManagedRuleOverrideExclusion: frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable">matchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyManagedRuleOverrideRule <a name="FrontdoorFirewallPolicyManagedRuleOverrideRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyManagedRuleOverrideRule: frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rule_id FrontdoorFirewallPolicy#rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion">exclusion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]</code> | exclusion block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#rule_id FrontdoorFirewallPolicy#rule_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyManagedRuleOverrideRuleExclusion: frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable">matchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyTimeouts <a name="FrontdoorFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const frontdoorFirewallPolicyTimeouts: frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#create FrontdoorFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#delete FrontdoorFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#read FrontdoorFirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#update FrontdoorFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#create FrontdoorFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#delete FrontdoorFirewallPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#read FrontdoorFirewallPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/frontdoor_firewall_policy#update FrontdoorFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorFirewallPolicyCustomRuleList <a name="FrontdoorFirewallPolicyCustomRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get"></a>

```typescript
public get(index: number): FrontdoorFirewallPolicyCustomRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>[]

---


### FrontdoorFirewallPolicyCustomRuleMatchConditionList <a name="FrontdoorFirewallPolicyCustomRuleMatchConditionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get"></a>

```typescript
public get(index: number): FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyCustomRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]

---


### FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference <a name="FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition">resetNegationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegationCondition` <a name="resetNegationCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition"></a>

```typescript
public resetNegationCondition(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput">negationConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable">matchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition">negationCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput"></a>

```typescript
public readonly matchVariableInput: string;
```

- *Type:* string

---

##### `negationConditionInput`<sup>Optional</sup> <a name="negationConditionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput"></a>

```typescript
public readonly negationConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

---

##### `negationCondition`<sup>Required</sup> <a name="negationCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition"></a>

```typescript
public readonly negationCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyCustomRuleMatchCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>

---


### FrontdoorFirewallPolicyCustomRuleOutputReference <a name="FrontdoorFirewallPolicyCustomRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition">resetMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes">resetRateLimitDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold">resetRateLimitThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition"></a>

```typescript
public putMatchCondition(value: IResolvable | FrontdoorFirewallPolicyCustomRuleMatchCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMatchCondition` <a name="resetMatchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition"></a>

```typescript
public resetMatchCondition(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRateLimitDurationInMinutes` <a name="resetRateLimitDurationInMinutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes"></a>

```typescript
public resetRateLimitDurationInMinutes(): void
```

##### `resetRateLimitThreshold` <a name="resetRateLimitThreshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold"></a>

```typescript
public resetRateLimitThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList">FrontdoorFirewallPolicyCustomRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput">rateLimitDurationInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput">rateLimitThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes">rateLimitDurationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition"></a>

```typescript
public readonly matchCondition: FrontdoorFirewallPolicyCustomRuleMatchConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList">FrontdoorFirewallPolicyCustomRuleMatchConditionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput"></a>

```typescript
public readonly matchConditionInput: IResolvable | FrontdoorFirewallPolicyCustomRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `rateLimitDurationInMinutesInput`<sup>Optional</sup> <a name="rateLimitDurationInMinutesInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput"></a>

```typescript
public readonly rateLimitDurationInMinutesInput: number;
```

- *Type:* number

---

##### `rateLimitThresholdInput`<sup>Optional</sup> <a name="rateLimitThresholdInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput"></a>

```typescript
public readonly rateLimitThresholdInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rateLimitDurationInMinutes`<sup>Required</sup> <a name="rateLimitDurationInMinutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes"></a>

```typescript
public readonly rateLimitDurationInMinutes: number;
```

- *Type:* number

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyCustomRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>

---


### FrontdoorFirewallPolicyManagedRuleExclusionList <a name="FrontdoorFirewallPolicyManagedRuleExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get"></a>

```typescript
public get(index: number): FrontdoorFirewallPolicyManagedRuleExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>[]

---


### FrontdoorFirewallPolicyManagedRuleExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput"></a>

```typescript
public readonly matchVariableInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleExclusion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>

---


### FrontdoorFirewallPolicyManagedRuleList <a name="FrontdoorFirewallPolicyManagedRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get"></a>

```typescript
public get(index: number): FrontdoorFirewallPolicyManagedRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>[]

---


### FrontdoorFirewallPolicyManagedRuleOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride">putOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride">resetOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | FrontdoorFirewallPolicyManagedRuleExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>[]

---

##### `putOverride` <a name="putOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride"></a>

```typescript
public putOverride(value: IResolvable | FrontdoorFirewallPolicyManagedRuleOverride[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>[]

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```

##### `resetOverride` <a name="resetOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride"></a>

```typescript
public resetOverride(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList">FrontdoorFirewallPolicyManagedRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList">FrontdoorFirewallPolicyManagedRuleOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput">overrideInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: FrontdoorFirewallPolicyManagedRuleExclusionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList">FrontdoorFirewallPolicyManagedRuleExclusionList</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.override"></a>

```typescript
public readonly override: FrontdoorFirewallPolicyManagedRuleOverrideList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList">FrontdoorFirewallPolicyManagedRuleOverrideList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | FrontdoorFirewallPolicyManagedRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>[]

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput"></a>

```typescript
public readonly overrideInput: IResolvable | FrontdoorFirewallPolicyManagedRuleOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>

---


### FrontdoorFirewallPolicyManagedRuleOverrideExclusionList <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get"></a>

```typescript
public get(index: number): FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]

---


### FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput"></a>

```typescript
public readonly matchVariableInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideExclusion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>

---


### FrontdoorFirewallPolicyManagedRuleOverrideList <a name="FrontdoorFirewallPolicyManagedRuleOverrideList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get"></a>

```typescript
public get(index: number): FrontdoorFirewallPolicyManagedRuleOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>[]

---


### FrontdoorFirewallPolicyManagedRuleOverrideOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList">FrontdoorFirewallPolicyManagedRuleOverrideRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput">ruleGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName">ruleGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: FrontdoorFirewallPolicyManagedRuleOverrideExclusionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule"></a>

```typescript
public readonly rule: FrontdoorFirewallPolicyManagedRuleOverrideRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList">FrontdoorFirewallPolicyManagedRuleOverrideRuleList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]

---

##### `ruleGroupNameInput`<sup>Optional</sup> <a name="ruleGroupNameInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput"></a>

```typescript
public readonly ruleGroupNameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]

---

##### `ruleGroupName`<sup>Required</sup> <a name="ruleGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName"></a>

```typescript
public readonly ruleGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleOverride;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get"></a>

```typescript
public get(index: number): FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput"></a>

```typescript
public readonly matchVariableInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleList <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get"></a>

```typescript
public get(index: number): FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyManagedRuleOverrideRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>

---


### FrontdoorFirewallPolicyTimeoutsOutputReference <a name="FrontdoorFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { frontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorFirewallPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

---



