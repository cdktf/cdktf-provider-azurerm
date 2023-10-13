# `azurerm_cdn_frontdoor_firewall_policy`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_firewall_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy).

# `cdnFrontdoorFirewallPolicy` Submodule <a name="`cdnFrontdoorFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorFirewallPolicy <a name="CdnFrontdoorFirewallPolicy" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy azurerm_cdn_frontdoor_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy(scope: Construct, id: string, config: CdnFrontdoorFirewallPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig">CdnFrontdoorFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig">CdnFrontdoorFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putCustomRule">putCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putManagedRule">putManagedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomBlockResponseBody">resetCustomBlockResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode">resetCustomBlockResponseStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomRule">resetCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetManagedRule">resetManagedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCustomRule` <a name="putCustomRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putCustomRule"></a>

```typescript
public putCustomRule(value: IResolvable | CdnFrontdoorFirewallPolicyCustomRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putCustomRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>[]

---

##### `putManagedRule` <a name="putManagedRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putManagedRule"></a>

```typescript
public putManagedRule(value: IResolvable | CdnFrontdoorFirewallPolicyManagedRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putManagedRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnFrontdoorFirewallPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>

---

##### `resetCustomBlockResponseBody` <a name="resetCustomBlockResponseBody" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomBlockResponseBody"></a>

```typescript
public resetCustomBlockResponseBody(): void
```

##### `resetCustomBlockResponseStatusCode` <a name="resetCustomBlockResponseStatusCode" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode"></a>

```typescript
public resetCustomBlockResponseStatusCode(): void
```

##### `resetCustomRule` <a name="resetCustomRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomRule"></a>

```typescript
public resetCustomRule(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedRule` <a name="resetManagedRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetManagedRule"></a>

```typescript
public resetManagedRule(): void
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetRedirectUrl"></a>

```typescript
public resetRedirectUrl(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isConstruct"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformElement"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformResource"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customRule">customRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList">CdnFrontdoorFirewallPolicyCustomRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.frontendEndpointIds">frontendEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.managedRule">managedRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList">CdnFrontdoorFirewallPolicyManagedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference">CdnFrontdoorFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseBodyInput">customBlockResponseBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput">customBlockResponseStatusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customRuleInput">customRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.managedRuleInput">managedRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.redirectUrlInput">redirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseBody">customBlockResponseBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseStatusCode">customBlockResponseStatusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customRule`<sup>Required</sup> <a name="customRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customRule"></a>

```typescript
public readonly customRule: CdnFrontdoorFirewallPolicyCustomRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList">CdnFrontdoorFirewallPolicyCustomRuleList</a>

---

##### `frontendEndpointIds`<sup>Required</sup> <a name="frontendEndpointIds" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.frontendEndpointIds"></a>

```typescript
public readonly frontendEndpointIds: string[];
```

- *Type:* string[]

---

##### `managedRule`<sup>Required</sup> <a name="managedRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.managedRule"></a>

```typescript
public readonly managedRule: CdnFrontdoorFirewallPolicyManagedRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList">CdnFrontdoorFirewallPolicyManagedRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorFirewallPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference">CdnFrontdoorFirewallPolicyTimeoutsOutputReference</a>

---

##### `customBlockResponseBodyInput`<sup>Optional</sup> <a name="customBlockResponseBodyInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseBodyInput"></a>

```typescript
public readonly customBlockResponseBodyInput: string;
```

- *Type:* string

---

##### `customBlockResponseStatusCodeInput`<sup>Optional</sup> <a name="customBlockResponseStatusCodeInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput"></a>

```typescript
public readonly customBlockResponseStatusCodeInput: number;
```

- *Type:* number

---

##### `customRuleInput`<sup>Optional</sup> <a name="customRuleInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customRuleInput"></a>

```typescript
public readonly customRuleInput: IResolvable | CdnFrontdoorFirewallPolicyCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedRuleInput`<sup>Optional</sup> <a name="managedRuleInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.managedRuleInput"></a>

```typescript
public readonly managedRuleInput: IResolvable | CdnFrontdoorFirewallPolicyManagedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>[]

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CdnFrontdoorFirewallPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>

---

##### `customBlockResponseBody`<sup>Required</sup> <a name="customBlockResponseBody" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseBody"></a>

```typescript
public readonly customBlockResponseBody: string;
```

- *Type:* string

---

##### `customBlockResponseStatusCode`<sup>Required</sup> <a name="customBlockResponseStatusCode" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseStatusCode"></a>

```typescript
public readonly customBlockResponseStatusCode: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorFirewallPolicyConfig <a name="CdnFrontdoorFirewallPolicyConfig" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyConfig: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#mode CdnFrontdoorFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#resource_group_name CdnFrontdoorFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#sku_name CdnFrontdoorFirewallPolicy#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customBlockResponseBody">customBlockResponseBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_body CdnFrontdoorFirewallPolicy#custom_block_response_body}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode">customBlockResponseStatusCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_status_code CdnFrontdoorFirewallPolicy#custom_block_response_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customRule">customRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>[]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#id CdnFrontdoorFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.managedRule">managedRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>[]</code> | managed_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#redirect_url CdnFrontdoorFirewallPolicy#redirect_url}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#tags CdnFrontdoorFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#mode CdnFrontdoorFirewallPolicy#mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#resource_group_name CdnFrontdoorFirewallPolicy#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#sku_name CdnFrontdoorFirewallPolicy#sku_name}.

---

##### `customBlockResponseBody`<sup>Optional</sup> <a name="customBlockResponseBody" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customBlockResponseBody"></a>

```typescript
public readonly customBlockResponseBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_body CdnFrontdoorFirewallPolicy#custom_block_response_body}.

---

##### `customBlockResponseStatusCode`<sup>Optional</sup> <a name="customBlockResponseStatusCode" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode"></a>

```typescript
public readonly customBlockResponseStatusCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_status_code CdnFrontdoorFirewallPolicy#custom_block_response_status_code}.

---

##### `customRule`<sup>Optional</sup> <a name="customRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customRule"></a>

```typescript
public readonly customRule: IResolvable | CdnFrontdoorFirewallPolicyCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>[]

custom_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#custom_rule CdnFrontdoorFirewallPolicy#custom_rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#id CdnFrontdoorFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedRule`<sup>Optional</sup> <a name="managedRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.managedRule"></a>

```typescript
public readonly managedRule: IResolvable | CdnFrontdoorFirewallPolicyManagedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>[]

managed_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#managed_rule CdnFrontdoorFirewallPolicy#managed_rule}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#redirect_url CdnFrontdoorFirewallPolicy#redirect_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#tags CdnFrontdoorFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorFirewallPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#timeouts CdnFrontdoorFirewallPolicy#timeouts}

---

### CdnFrontdoorFirewallPolicyCustomRule <a name="CdnFrontdoorFirewallPolicyCustomRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyCustomRule: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#type CdnFrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.matchCondition">matchCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]</code> | match_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#priority CdnFrontdoorFirewallPolicy#priority}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes">rateLimitDurationInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rate_limit_duration_in_minutes CdnFrontdoorFirewallPolicy#rate_limit_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rate_limit_threshold CdnFrontdoorFirewallPolicy#rate_limit_threshold}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#type CdnFrontdoorFirewallPolicy#type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}.

---

##### `matchCondition`<sup>Optional</sup> <a name="matchCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.matchCondition"></a>

```typescript
public readonly matchCondition: IResolvable | CdnFrontdoorFirewallPolicyCustomRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_condition CdnFrontdoorFirewallPolicy#match_condition}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#priority CdnFrontdoorFirewallPolicy#priority}.

---

##### `rateLimitDurationInMinutes`<sup>Optional</sup> <a name="rateLimitDurationInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes"></a>

```typescript
public readonly rateLimitDurationInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rate_limit_duration_in_minutes CdnFrontdoorFirewallPolicy#rate_limit_duration_in_minutes}.

---

##### `rateLimitThreshold`<sup>Optional</sup> <a name="rateLimitThreshold" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rate_limit_threshold CdnFrontdoorFirewallPolicy#rate_limit_threshold}.

---

### CdnFrontdoorFirewallPolicyCustomRuleMatchCondition <a name="CdnFrontdoorFirewallPolicyCustomRuleMatchCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyCustomRuleMatchCondition: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_values CdnFrontdoorFirewallPolicy#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable">matchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition">negationCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#negation_condition CdnFrontdoorFirewallPolicy#negation_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#transforms CdnFrontdoorFirewallPolicy#transforms}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_values CdnFrontdoorFirewallPolicy#match_values}.

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}.

---

##### `negationCondition`<sup>Optional</sup> <a name="negationCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition"></a>

```typescript
public readonly negationCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#negation_condition CdnFrontdoorFirewallPolicy#negation_condition}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#transforms CdnFrontdoorFirewallPolicy#transforms}.

---

### CdnFrontdoorFirewallPolicyManagedRule <a name="CdnFrontdoorFirewallPolicyManagedRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyManagedRule: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#type CdnFrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#version CdnFrontdoorFirewallPolicy#version}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.exclusion">exclusion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>[]</code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.override">override</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>[]</code> | override block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#type CdnFrontdoorFirewallPolicy#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#version CdnFrontdoorFirewallPolicy#version}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#exclusion CdnFrontdoorFirewallPolicy#exclusion}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.override"></a>

```typescript
public readonly override: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>[]

override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#override CdnFrontdoorFirewallPolicy#override}

---

### CdnFrontdoorFirewallPolicyManagedRuleExclusion <a name="CdnFrontdoorFirewallPolicyManagedRuleExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyManagedRuleExclusion: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable">matchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}.

---

### CdnFrontdoorFirewallPolicyManagedRuleOverride <a name="CdnFrontdoorFirewallPolicyManagedRuleOverride" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyManagedRuleOverride: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName">ruleGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rule_group_name CdnFrontdoorFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.exclusion">exclusion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]</code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]</code> | rule block. |

---

##### `ruleGroupName`<sup>Required</sup> <a name="ruleGroupName" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName"></a>

```typescript
public readonly ruleGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rule_group_name CdnFrontdoorFirewallPolicy#rule_group_name}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#exclusion CdnFrontdoorFirewallPolicy#exclusion}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.rule"></a>

```typescript
public readonly rule: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rule CdnFrontdoorFirewallPolicy#rule}

---

### CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable">matchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}.

---

### CdnFrontdoorFirewallPolicyManagedRuleOverrideRule <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyManagedRuleOverrideRule: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rule_id CdnFrontdoorFirewallPolicy#rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion">exclusion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]</code> | exclusion block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#rule_id CdnFrontdoorFirewallPolicy#rule_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#exclusion CdnFrontdoorFirewallPolicy#exclusion}

---

### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable">matchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}.

---

### CdnFrontdoorFirewallPolicyTimeouts <a name="CdnFrontdoorFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorFirewallPolicyTimeouts: cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#create CdnFrontdoorFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#delete CdnFrontdoorFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#read CdnFrontdoorFirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#update CdnFrontdoorFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#create CdnFrontdoorFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#delete CdnFrontdoorFirewallPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#read CdnFrontdoorFirewallPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/cdn_frontdoor_firewall_policy#update CdnFrontdoorFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorFirewallPolicyCustomRuleList <a name="CdnFrontdoorFirewallPolicyCustomRuleList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.get"></a>

```typescript
public get(index: number): CdnFrontdoorFirewallPolicyCustomRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>[]

---


### CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList <a name="CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.get"></a>

```typescript
public get(index: number): CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyCustomRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]

---


### CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference <a name="CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition">resetNegationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegationCondition` <a name="resetNegationCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition"></a>

```typescript
public resetNegationCondition(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput">negationConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable">matchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition">negationCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput"></a>

```typescript
public readonly matchVariableInput: string;
```

- *Type:* string

---

##### `negationConditionInput`<sup>Optional</sup> <a name="negationConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput"></a>

```typescript
public readonly negationConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

---

##### `negationCondition`<sup>Required</sup> <a name="negationCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition"></a>

```typescript
public readonly negationCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyCustomRuleMatchCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>

---


### CdnFrontdoorFirewallPolicyCustomRuleOutputReference <a name="CdnFrontdoorFirewallPolicyCustomRuleOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition">resetMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes">resetRateLimitDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold">resetRateLimitThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition"></a>

```typescript
public putMatchCondition(value: IResolvable | CdnFrontdoorFirewallPolicyCustomRuleMatchCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMatchCondition` <a name="resetMatchCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition"></a>

```typescript
public resetMatchCondition(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRateLimitDurationInMinutes` <a name="resetRateLimitDurationInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes"></a>

```typescript
public resetRateLimitDurationInMinutes(): void
```

##### `resetRateLimitThreshold` <a name="resetRateLimitThreshold" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold"></a>

```typescript
public resetRateLimitThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList">CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput">rateLimitDurationInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput">rateLimitThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes">rateLimitDurationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition"></a>

```typescript
public readonly matchCondition: CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList">CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput"></a>

```typescript
public readonly matchConditionInput: IResolvable | CdnFrontdoorFirewallPolicyCustomRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `rateLimitDurationInMinutesInput`<sup>Optional</sup> <a name="rateLimitDurationInMinutesInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput"></a>

```typescript
public readonly rateLimitDurationInMinutesInput: number;
```

- *Type:* number

---

##### `rateLimitThresholdInput`<sup>Optional</sup> <a name="rateLimitThresholdInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput"></a>

```typescript
public readonly rateLimitThresholdInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rateLimitDurationInMinutes`<sup>Required</sup> <a name="rateLimitDurationInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes"></a>

```typescript
public readonly rateLimitDurationInMinutes: number;
```

- *Type:* number

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyCustomRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>

---


### CdnFrontdoorFirewallPolicyManagedRuleExclusionList <a name="CdnFrontdoorFirewallPolicyManagedRuleExclusionList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.get"></a>

```typescript
public get(index: number): CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>[]

---


### CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput"></a>

```typescript
public readonly matchVariableInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleExclusion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>

---


### CdnFrontdoorFirewallPolicyManagedRuleList <a name="CdnFrontdoorFirewallPolicyManagedRuleList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.get"></a>

```typescript
public get(index: number): CdnFrontdoorFirewallPolicyManagedRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>[]

---


### CdnFrontdoorFirewallPolicyManagedRuleOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putOverride">putOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride">resetOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>[]

---

##### `putOverride` <a name="putOverride" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putOverride"></a>

```typescript
public putOverride(value: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverride[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putOverride.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>[]

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```

##### `resetOverride` <a name="resetOverride" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride"></a>

```typescript
public resetOverride(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList">CdnFrontdoorFirewallPolicyManagedRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList">CdnFrontdoorFirewallPolicyManagedRuleOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput">overrideInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: CdnFrontdoorFirewallPolicyManagedRuleExclusionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList">CdnFrontdoorFirewallPolicyManagedRuleExclusionList</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.override"></a>

```typescript
public readonly override: CdnFrontdoorFirewallPolicyManagedRuleOverrideList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList">CdnFrontdoorFirewallPolicyManagedRuleOverrideList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>[]

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput"></a>

```typescript
public readonly overrideInput: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get"></a>

```typescript
public get(index: number): CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput"></a>

```typescript
public readonly matchVariableInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideList <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.get"></a>

```typescript
public get(index: number): CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>[]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput">ruleGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName">ruleGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule"></a>

```typescript
public readonly rule: CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>[]

---

##### `ruleGroupNameInput`<sup>Optional</sup> <a name="ruleGroupNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput"></a>

```typescript
public readonly ruleGroupNameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]

---

##### `ruleGroupName`<sup>Required</sup> <a name="ruleGroupName" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName"></a>

```typescript
public readonly ruleGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverride;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get"></a>

```typescript
public get(index: number): CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput"></a>

```typescript
public readonly matchVariableInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable"></a>

```typescript
public readonly matchVariable: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.get"></a>

```typescript
public get(index: number): CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>[]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>[]

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyManagedRuleOverrideRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>

---


### CdnFrontdoorFirewallPolicyTimeoutsOutputReference <a name="CdnFrontdoorFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorFirewallPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorFirewallPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>

---



