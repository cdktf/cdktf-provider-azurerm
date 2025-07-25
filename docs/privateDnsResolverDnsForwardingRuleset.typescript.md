# `privateDnsResolverDnsForwardingRuleset` Submodule <a name="`privateDnsResolverDnsForwardingRuleset` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverDnsForwardingRuleset <a name="PrivateDnsResolverDnsForwardingRuleset" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset azurerm_private_dns_resolver_dns_forwarding_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer"></a>

```typescript
import { privateDnsResolverDnsForwardingRuleset } from '@cdktf/provider-azurerm'

new privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset(scope: Construct, id: string, config: PrivateDnsResolverDnsForwardingRulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig">PrivateDnsResolverDnsForwardingRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig">PrivateDnsResolverDnsForwardingRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivateDnsResolverDnsForwardingRulesetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverDnsForwardingRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct"></a>

```typescript
import { privateDnsResolverDnsForwardingRuleset } from '@cdktf/provider-azurerm'

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement"></a>

```typescript
import { privateDnsResolverDnsForwardingRuleset } from '@cdktf/provider-azurerm'

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource"></a>

```typescript
import { privateDnsResolverDnsForwardingRuleset } from '@cdktf/provider-azurerm'

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport"></a>

```typescript
import { privateDnsResolverDnsForwardingRuleset } from '@cdktf/provider-azurerm'

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivateDnsResolverDnsForwardingRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateDnsResolverDnsForwardingRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateDnsResolverDnsForwardingRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverDnsForwardingRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIdsInput">privateDnsResolverOutboundEndpointIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds">privateDnsResolverOutboundEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateDnsResolverOutboundEndpointIdsInput`<sup>Optional</sup> <a name="privateDnsResolverOutboundEndpointIdsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIdsInput"></a>

```typescript
public readonly privateDnsResolverOutboundEndpointIdsInput: string[];
```

- *Type:* string[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivateDnsResolverDnsForwardingRulesetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsResolverOutboundEndpointIds`<sup>Required</sup> <a name="privateDnsResolverOutboundEndpointIds" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds"></a>

```typescript
public readonly privateDnsResolverOutboundEndpointIds: string[];
```

- *Type:* string[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverDnsForwardingRulesetConfig <a name="PrivateDnsResolverDnsForwardingRulesetConfig" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.Initializer"></a>

```typescript
import { privateDnsResolverDnsForwardingRuleset } from '@cdktf/provider-azurerm'

const privateDnsResolverDnsForwardingRulesetConfig: privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.privateDnsResolverOutboundEndpointIds">privateDnsResolverOutboundEndpointIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}.

---

##### `privateDnsResolverOutboundEndpointIds`<sup>Required</sup> <a name="privateDnsResolverOutboundEndpointIds" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.privateDnsResolverOutboundEndpointIds"></a>

```typescript
public readonly privateDnsResolverOutboundEndpointIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateDnsResolverDnsForwardingRulesetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#timeouts PrivateDnsResolverDnsForwardingRuleset#timeouts}

---

### PrivateDnsResolverDnsForwardingRulesetTimeouts <a name="PrivateDnsResolverDnsForwardingRulesetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.Initializer"></a>

```typescript
import { privateDnsResolverDnsForwardingRuleset } from '@cdktf/provider-azurerm'

const privateDnsResolverDnsForwardingRulesetTimeouts: privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference <a name="PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer"></a>

```typescript
import { privateDnsResolverDnsForwardingRuleset } from '@cdktf/provider-azurerm'

new privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateDnsResolverDnsForwardingRulesetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---



