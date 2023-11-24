# `azurerm_private_dns_resolver_forwarding_rule`

Refer to the Terraform Registory for docs: [`azurerm_private_dns_resolver_forwarding_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule).

# `privateDnsResolverForwardingRule` Submodule <a name="`privateDnsResolverForwardingRule` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverForwardingRule <a name="PrivateDnsResolverForwardingRule" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule azurerm_private_dns_resolver_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

new privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule(scope: Construct, id: string, config: PrivateDnsResolverForwardingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig">PrivateDnsResolverForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig">PrivateDnsResolverForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers">putTargetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTargetDnsServers` <a name="putTargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers"></a>

```typescript
public putTargetDnsServers(value: IResolvable | PrivateDnsResolverForwardingRuleTargetDnsServers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivateDnsResolverForwardingRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateDnsResolverForwardingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateDnsResolverForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServers">targetDnsServers</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList">PrivateDnsResolverForwardingRuleTargetDnsServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference">PrivateDnsResolverForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput">dnsForwardingRulesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServersInput">targetDnsServersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId">dnsForwardingRulesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targetDnsServers`<sup>Required</sup> <a name="targetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServers"></a>

```typescript
public readonly targetDnsServers: PrivateDnsResolverForwardingRuleTargetDnsServersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList">PrivateDnsResolverForwardingRuleTargetDnsServersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateDnsResolverForwardingRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference">PrivateDnsResolverForwardingRuleTimeoutsOutputReference</a>

---

##### `dnsForwardingRulesetIdInput`<sup>Optional</sup> <a name="dnsForwardingRulesetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput"></a>

```typescript
public readonly dnsForwardingRulesetIdInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetDnsServersInput`<sup>Optional</sup> <a name="targetDnsServersInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServersInput"></a>

```typescript
public readonly targetDnsServersInput: IResolvable | PrivateDnsResolverForwardingRuleTargetDnsServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivateDnsResolverForwardingRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

---

##### `dnsForwardingRulesetId`<sup>Required</sup> <a name="dnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId"></a>

```typescript
public readonly dnsForwardingRulesetId: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverForwardingRuleConfig <a name="PrivateDnsResolverForwardingRuleConfig" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.Initializer"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

const privateDnsResolverForwardingRuleConfig: privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId">dnsForwardingRulesetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.targetDnsServers">targetDnsServers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>[]</code> | target_dns_servers block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnsForwardingRulesetId`<sup>Required</sup> <a name="dnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId"></a>

```typescript
public readonly dnsForwardingRulesetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}.

---

##### `targetDnsServers`<sup>Required</sup> <a name="targetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.targetDnsServers"></a>

```typescript
public readonly targetDnsServers: IResolvable | PrivateDnsResolverForwardingRuleTargetDnsServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>[]

target_dns_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#target_dns_servers PrivateDnsResolverForwardingRule#target_dns_servers}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateDnsResolverForwardingRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#timeouts PrivateDnsResolverForwardingRule#timeouts}

---

### PrivateDnsResolverForwardingRuleTargetDnsServers <a name="PrivateDnsResolverForwardingRuleTargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.Initializer"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

const privateDnsResolverForwardingRuleTargetDnsServers: privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#ip_address PrivateDnsResolverForwardingRule#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#port PrivateDnsResolverForwardingRule#port}. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#ip_address PrivateDnsResolverForwardingRule#ip_address}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#port PrivateDnsResolverForwardingRule#port}.

---

### PrivateDnsResolverForwardingRuleTimeouts <a name="PrivateDnsResolverForwardingRuleTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.Initializer"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

const privateDnsResolverForwardingRuleTimeouts: privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverForwardingRuleTargetDnsServersList <a name="PrivateDnsResolverForwardingRuleTargetDnsServersList" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

new privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get"></a>

```typescript
public get(index: number): PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateDnsResolverForwardingRuleTargetDnsServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>[]

---


### PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference <a name="PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

new privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateDnsResolverForwardingRuleTargetDnsServers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>

---


### PrivateDnsResolverForwardingRuleTimeoutsOutputReference <a name="PrivateDnsResolverForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { privateDnsResolverForwardingRule } from '@cdktf/provider-azurerm'

new privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateDnsResolverForwardingRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

---



