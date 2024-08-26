# `securityCenterSubscriptionPricing` Submodule <a name="`securityCenterSubscriptionPricing` Submodule" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterSubscriptionPricing <a name="SecurityCenterSubscriptionPricing" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing azurerm_security_center_subscription_pricing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

new securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing(scope: Construct, id: string, config: SecurityCenterSubscriptionPricingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig">SecurityCenterSubscriptionPricingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig">SecurityCenterSubscriptionPricingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetSubplan">resetSubplan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putExtension"></a>

```typescript
public putExtension(value: IResolvable | SecurityCenterSubscriptionPricingExtension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putExtension.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts"></a>

```typescript
public putTimeouts(value: SecurityCenterSubscriptionPricingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

---

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetSubplan` <a name="resetSubplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetSubplan"></a>

```typescript
public resetSubplan(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterSubscriptionPricing resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityCenterSubscriptionPricing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityCenterSubscriptionPricing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityCenterSubscriptionPricing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterSubscriptionPricing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList">SecurityCenterSubscriptionPricingExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference">SecurityCenterSubscriptionPricingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.extensionInput">extensionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplanInput">subplanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplan">subplan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.extension"></a>

```typescript
public readonly extension: SecurityCenterSubscriptionPricingExtensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList">SecurityCenterSubscriptionPricingExtensionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityCenterSubscriptionPricingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference">SecurityCenterSubscriptionPricingTimeoutsOutputReference</a>

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.extensionInput"></a>

```typescript
public readonly extensionInput: IResolvable | SecurityCenterSubscriptionPricingExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `subplanInput`<sup>Optional</sup> <a name="subplanInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplanInput"></a>

```typescript
public readonly subplanInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecurityCenterSubscriptionPricingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `subplan`<sup>Required</sup> <a name="subplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplan"></a>

```typescript
public readonly subplan: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterSubscriptionPricingConfig <a name="SecurityCenterSubscriptionPricingConfig" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.Initializer"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

const securityCenterSubscriptionPricingConfig: securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#tier SecurityCenterSubscriptionPricing#tier}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.extension">extension</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a>[]</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#id SecurityCenterSubscriptionPricing#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#resource_type SecurityCenterSubscriptionPricing#resource_type}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.subplan">subplan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#subplan SecurityCenterSubscriptionPricing#subplan}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#tier SecurityCenterSubscriptionPricing#tier}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.extension"></a>

```typescript
public readonly extension: IResolvable | SecurityCenterSubscriptionPricingExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a>[]

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#extension SecurityCenterSubscriptionPricing#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#id SecurityCenterSubscriptionPricing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#resource_type SecurityCenterSubscriptionPricing#resource_type}.

---

##### `subplan`<sup>Optional</sup> <a name="subplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.subplan"></a>

```typescript
public readonly subplan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#subplan SecurityCenterSubscriptionPricing#subplan}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityCenterSubscriptionPricingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#timeouts SecurityCenterSubscriptionPricing#timeouts}

---

### SecurityCenterSubscriptionPricingExtension <a name="SecurityCenterSubscriptionPricingExtension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.Initializer"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

const securityCenterSubscriptionPricingExtension: securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#name SecurityCenterSubscriptionPricing#name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.property.additionalExtensionProperties">additionalExtensionProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#additional_extension_properties SecurityCenterSubscriptionPricing#additional_extension_properties}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#name SecurityCenterSubscriptionPricing#name}.

---

##### `additionalExtensionProperties`<sup>Optional</sup> <a name="additionalExtensionProperties" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.property.additionalExtensionProperties"></a>

```typescript
public readonly additionalExtensionProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#additional_extension_properties SecurityCenterSubscriptionPricing#additional_extension_properties}.

---

### SecurityCenterSubscriptionPricingTimeouts <a name="SecurityCenterSubscriptionPricingTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.Initializer"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

const securityCenterSubscriptionPricingTimeouts: securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#create SecurityCenterSubscriptionPricing#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#delete SecurityCenterSubscriptionPricing#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#read SecurityCenterSubscriptionPricing#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#update SecurityCenterSubscriptionPricing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#create SecurityCenterSubscriptionPricing#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#delete SecurityCenterSubscriptionPricing#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#read SecurityCenterSubscriptionPricing#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/security_center_subscription_pricing#update SecurityCenterSubscriptionPricing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterSubscriptionPricingExtensionList <a name="SecurityCenterSubscriptionPricingExtensionList" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

new securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.get"></a>

```typescript
public get(index: number): SecurityCenterSubscriptionPricingExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityCenterSubscriptionPricingExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a>[]

---


### SecurityCenterSubscriptionPricingExtensionOutputReference <a name="SecurityCenterSubscriptionPricingExtensionOutputReference" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

new securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resetAdditionalExtensionProperties">resetAdditionalExtensionProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalExtensionProperties` <a name="resetAdditionalExtensionProperties" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resetAdditionalExtensionProperties"></a>

```typescript
public resetAdditionalExtensionProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.additionalExtensionPropertiesInput">additionalExtensionPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.additionalExtensionProperties">additionalExtensionProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalExtensionPropertiesInput`<sup>Optional</sup> <a name="additionalExtensionPropertiesInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.additionalExtensionPropertiesInput"></a>

```typescript
public readonly additionalExtensionPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `additionalExtensionProperties`<sup>Required</sup> <a name="additionalExtensionProperties" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.additionalExtensionProperties"></a>

```typescript
public readonly additionalExtensionProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityCenterSubscriptionPricingExtension;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension">SecurityCenterSubscriptionPricingExtension</a>

---


### SecurityCenterSubscriptionPricingTimeoutsOutputReference <a name="SecurityCenterSubscriptionPricingTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer"></a>

```typescript
import { securityCenterSubscriptionPricing } from '@cdktf/provider-azurerm'

new securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityCenterSubscriptionPricingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

---



