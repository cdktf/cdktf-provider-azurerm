# `subscriptionPolicyRemediation` Submodule <a name="`subscriptionPolicyRemediation` Submodule" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionPolicyRemediation <a name="SubscriptionPolicyRemediation" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation azurerm_subscription_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer"></a>

```typescript
import { subscriptionPolicyRemediation } from '@cdktf/provider-azurerm'

new subscriptionPolicyRemediation.SubscriptionPolicyRemediation(scope: Construct, id: string, config: SubscriptionPolicyRemediationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig">SubscriptionPolicyRemediationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig">SubscriptionPolicyRemediationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetFailurePercentage">resetFailurePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetLocationFilters">resetLocationFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetParallelDeployments">resetParallelDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionReferenceId">resetPolicyDefinitionReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceCount">resetResourceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceDiscoveryMode">resetResourceDiscoveryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts"></a>

```typescript
public putTimeouts(value: SubscriptionPolicyRemediationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>

---

##### `resetFailurePercentage` <a name="resetFailurePercentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetFailurePercentage"></a>

```typescript
public resetFailurePercentage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationFilters` <a name="resetLocationFilters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetLocationFilters"></a>

```typescript
public resetLocationFilters(): void
```

##### `resetParallelDeployments` <a name="resetParallelDeployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetParallelDeployments"></a>

```typescript
public resetParallelDeployments(): void
```

##### `resetPolicyDefinitionReferenceId` <a name="resetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```typescript
public resetPolicyDefinitionReferenceId(): void
```

##### `resetResourceCount` <a name="resetResourceCount" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceCount"></a>

```typescript
public resetResourceCount(): void
```

##### `resetResourceDiscoveryMode` <a name="resetResourceDiscoveryMode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceDiscoveryMode"></a>

```typescript
public resetResourceDiscoveryMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SubscriptionPolicyRemediation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct"></a>

```typescript
import { subscriptionPolicyRemediation } from '@cdktf/provider-azurerm'

subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement"></a>

```typescript
import { subscriptionPolicyRemediation } from '@cdktf/provider-azurerm'

subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource"></a>

```typescript
import { subscriptionPolicyRemediation } from '@cdktf/provider-azurerm'

subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport"></a>

```typescript
import { subscriptionPolicyRemediation } from '@cdktf/provider-azurerm'

subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SubscriptionPolicyRemediation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SubscriptionPolicyRemediation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SubscriptionPolicyRemediation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SubscriptionPolicyRemediation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference">SubscriptionPolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentageInput">failurePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFiltersInput">locationFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeploymentsInput">parallelDeploymentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentIdInput">policyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceIdInput">policyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCountInput">resourceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryModeInput">resourceDiscoveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentage">failurePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFilters">locationFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeployments">parallelDeployments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCount">resourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeouts"></a>

```typescript
public readonly timeouts: SubscriptionPolicyRemediationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference">SubscriptionPolicyRemediationTimeoutsOutputReference</a>

---

##### `failurePercentageInput`<sup>Optional</sup> <a name="failurePercentageInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentageInput"></a>

```typescript
public readonly failurePercentageInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationFiltersInput`<sup>Optional</sup> <a name="locationFiltersInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFiltersInput"></a>

```typescript
public readonly locationFiltersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parallelDeploymentsInput`<sup>Optional</sup> <a name="parallelDeploymentsInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeploymentsInput"></a>

```typescript
public readonly parallelDeploymentsInput: number;
```

- *Type:* number

---

##### `policyAssignmentIdInput`<sup>Optional</sup> <a name="policyAssignmentIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentIdInput"></a>

```typescript
public readonly policyAssignmentIdInput: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```typescript
public readonly policyDefinitionReferenceIdInput: string;
```

- *Type:* string

---

##### `resourceCountInput`<sup>Optional</sup> <a name="resourceCountInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCountInput"></a>

```typescript
public readonly resourceCountInput: number;
```

- *Type:* number

---

##### `resourceDiscoveryModeInput`<sup>Optional</sup> <a name="resourceDiscoveryModeInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryModeInput"></a>

```typescript
public readonly resourceDiscoveryModeInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubscriptionPolicyRemediationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>

---

##### `failurePercentage`<sup>Required</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentage"></a>

```typescript
public readonly failurePercentage: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationFilters`<sup>Required</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFilters"></a>

```typescript
public readonly locationFilters: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parallelDeployments`<sup>Required</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeployments"></a>

```typescript
public readonly parallelDeployments: number;
```

- *Type:* number

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceId`<sup>Required</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* number

---

##### `resourceDiscoveryMode`<sup>Required</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryMode"></a>

```typescript
public readonly resourceDiscoveryMode: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionPolicyRemediationConfig <a name="SubscriptionPolicyRemediationConfig" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.Initializer"></a>

```typescript
import { subscriptionPolicyRemediation } from '@cdktf/provider-azurerm'

const subscriptionPolicyRemediationConfig: subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.failurePercentage">failurePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.locationFilters">locationFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.parallelDeployments">parallelDeployments</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceCount">resourceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}.

---

##### `failurePercentage`<sup>Optional</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.failurePercentage"></a>

```typescript
public readonly failurePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationFilters`<sup>Optional</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.locationFilters"></a>

```typescript
public readonly locationFilters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}.

---

##### `parallelDeployments`<sup>Optional</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.parallelDeployments"></a>

```typescript
public readonly parallelDeployments: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}.

---

##### `resourceCount`<sup>Optional</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceCount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}.

---

##### `resourceDiscoveryMode`<sup>Optional</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```typescript
public readonly resourceDiscoveryMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SubscriptionPolicyRemediationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#timeouts SubscriptionPolicyRemediation#timeouts}

---

### SubscriptionPolicyRemediationTimeouts <a name="SubscriptionPolicyRemediationTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.Initializer"></a>

```typescript
import { subscriptionPolicyRemediation } from '@cdktf/provider-azurerm'

const subscriptionPolicyRemediationTimeouts: subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#create SubscriptionPolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#delete SubscriptionPolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#read SubscriptionPolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#update SubscriptionPolicyRemediation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#create SubscriptionPolicyRemediation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#delete SubscriptionPolicyRemediation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#read SubscriptionPolicyRemediation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/subscription_policy_remediation#update SubscriptionPolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionPolicyRemediationTimeoutsOutputReference <a name="SubscriptionPolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer"></a>

```typescript
import { subscriptionPolicyRemediation } from '@cdktf/provider-azurerm'

new subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubscriptionPolicyRemediationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>

---



