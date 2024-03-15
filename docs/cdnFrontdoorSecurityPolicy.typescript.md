# `cdnFrontdoorSecurityPolicy` Submodule <a name="`cdnFrontdoorSecurityPolicy` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorSecurityPolicy <a name="CdnFrontdoorSecurityPolicy" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy azurerm_cdn_frontdoor_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy(scope: Construct, id: string, config: CdnFrontdoorSecurityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig">CdnFrontdoorSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig">CdnFrontdoorSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies">putSecurityPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecurityPolicies` <a name="putSecurityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies"></a>

```typescript
public putSecurityPolicies(value: CdnFrontdoorSecurityPolicySecurityPolicies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnFrontdoorSecurityPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CdnFrontdoorSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnFrontdoorSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnFrontdoorSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPolicies">securityPolicies</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference">CdnFrontdoorSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileIdInput">cdnFrontdoorProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPoliciesInput">securityPoliciesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPolicies"></a>

```typescript
public readonly securityPolicies: CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorSecurityPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference">CdnFrontdoorSecurityPolicyTimeoutsOutputReference</a>

---

##### `cdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="cdnFrontdoorProfileIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileIdInput"></a>

```typescript
public readonly cdnFrontdoorProfileIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityPoliciesInput`<sup>Optional</sup> <a name="securityPoliciesInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPoliciesInput"></a>

```typescript
public readonly securityPoliciesInput: CdnFrontdoorSecurityPolicySecurityPolicies;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CdnFrontdoorSecurityPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileId"></a>

```typescript
public readonly cdnFrontdoorProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorSecurityPolicyConfig <a name="CdnFrontdoorSecurityPolicyConfig" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorSecurityPolicyConfig: cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.securityPolicies">securityPolicies</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | security_policies block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.cdnFrontdoorProfileId"></a>

```typescript
public readonly cdnFrontdoorProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}.

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.securityPolicies"></a>

```typescript
public readonly securityPolicies: CdnFrontdoorSecurityPolicySecurityPolicies;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

security_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#security_policies CdnFrontdoorSecurityPolicy#security_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorSecurityPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#timeouts CdnFrontdoorSecurityPolicy#timeouts}

---

### CdnFrontdoorSecurityPolicySecurityPolicies <a name="CdnFrontdoorSecurityPolicySecurityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorSecurityPolicySecurityPolicies: cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | firewall block. |

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.property.firewall"></a>

```typescript
public readonly firewall: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#firewall CdnFrontdoorSecurityPolicy#firewall}

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewall <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorSecurityPolicySecurityPoliciesFirewall: cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.association">association</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | association block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.cdnFrontdoorFirewallPolicyId">cdnFrontdoorFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_firewall_policy_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_firewall_policy_id}. |

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.association"></a>

```typescript
public readonly association: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#association CdnFrontdoorSecurityPolicy#association}

---

##### `cdnFrontdoorFirewallPolicyId`<sup>Required</sup> <a name="cdnFrontdoorFirewallPolicyId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.cdnFrontdoorFirewallPolicyId"></a>

```typescript
public readonly cdnFrontdoorFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_firewall_policy_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_firewall_policy_id}.

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation: cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.domain">domain</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>[]</code> | domain block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.patternsToMatch">patternsToMatch</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#patterns_to_match CdnFrontdoorSecurityPolicy#patterns_to_match}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.domain"></a>

```typescript
public readonly domain: IResolvable | CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>[]

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#domain CdnFrontdoorSecurityPolicy#domain}

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.patternsToMatch"></a>

```typescript
public readonly patternsToMatch: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#patterns_to_match CdnFrontdoorSecurityPolicy#patterns_to_match}.

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain: cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.property.cdnFrontdoorDomainId">cdnFrontdoorDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_domain_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_domain_id}. |

---

##### `cdnFrontdoorDomainId`<sup>Required</sup> <a name="cdnFrontdoorDomainId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.property.cdnFrontdoorDomainId"></a>

```typescript
public readonly cdnFrontdoorDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_domain_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_domain_id}.

---

### CdnFrontdoorSecurityPolicyTimeouts <a name="CdnFrontdoorSecurityPolicyTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

const cdnFrontdoorSecurityPolicyTimeouts: cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#create CdnFrontdoorSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#delete CdnFrontdoorSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#read CdnFrontdoorSecurityPolicy#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#create CdnFrontdoorSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#delete CdnFrontdoorSecurityPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_security_policy#read CdnFrontdoorSecurityPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get"></a>

```typescript
public get(index: number): CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>[]

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainIdInput">cdnFrontdoorDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainId">cdnFrontdoorDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cdnFrontdoorDomainIdInput`<sup>Optional</sup> <a name="cdnFrontdoorDomainIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainIdInput"></a>

```typescript
public readonly cdnFrontdoorDomainIdInput: string;
```

- *Type:* string

---

##### `cdnFrontdoorDomainId`<sup>Required</sup> <a name="cdnFrontdoorDomainId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainId"></a>

```typescript
public readonly cdnFrontdoorDomainId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain">putDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDomain` <a name="putDomain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain"></a>

```typescript
public putDomain(value: IResolvable | CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domain">domain</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domainInput">domainInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatchInput">patternsToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatch">patternsToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domain"></a>

```typescript
public readonly domain: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: IResolvable | CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>[]

---

##### `patternsToMatchInput`<sup>Optional</sup> <a name="patternsToMatchInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatchInput"></a>

```typescript
public readonly patternsToMatchInput: string[];
```

- *Type:* string[]

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatch"></a>

```typescript
public readonly patternsToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation">putAssociation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssociation` <a name="putAssociation" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation"></a>

```typescript
public putAssociation(value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.association">association</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.associationInput">associationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyIdInput">cdnFrontdoorFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyId">cdnFrontdoorFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.association"></a>

```typescript
public readonly association: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference</a>

---

##### `associationInput`<sup>Optional</sup> <a name="associationInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.associationInput"></a>

```typescript
public readonly associationInput: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---

##### `cdnFrontdoorFirewallPolicyIdInput`<sup>Optional</sup> <a name="cdnFrontdoorFirewallPolicyIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyIdInput"></a>

```typescript
public readonly cdnFrontdoorFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `cdnFrontdoorFirewallPolicyId`<sup>Required</sup> <a name="cdnFrontdoorFirewallPolicyId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyId"></a>

```typescript
public readonly cdnFrontdoorFirewallPolicyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall">putFirewall</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewall` <a name="putFirewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall"></a>

```typescript
public putFirewall(value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewallInput">firewallInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewall"></a>

```typescript
public readonly firewall: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference</a>

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewallInput"></a>

```typescript
public readonly firewallInput: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorSecurityPolicySecurityPolicies;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

---


### CdnFrontdoorSecurityPolicyTimeoutsOutputReference <a name="CdnFrontdoorSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorSecurityPolicy } from '@cdktf/provider-azurerm'

new cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorSecurityPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

---



