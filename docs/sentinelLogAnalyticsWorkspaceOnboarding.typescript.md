# `azurerm_sentinel_log_analytics_workspace_onboarding`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_log_analytics_workspace_onboarding`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding).

# `sentinelLogAnalyticsWorkspaceOnboarding` Submodule <a name="`sentinelLogAnalyticsWorkspaceOnboarding` Submodule" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelLogAnalyticsWorkspaceOnboarding <a name="SentinelLogAnalyticsWorkspaceOnboarding" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding azurerm_sentinel_log_analytics_workspace_onboarding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer"></a>

```typescript
import { sentinelLogAnalyticsWorkspaceOnboarding } from '@cdktf/provider-azurerm'

new sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding(scope: Construct, id: string, config?: SentinelLogAnalyticsWorkspaceOnboardingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig">SentinelLogAnalyticsWorkspaceOnboardingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig">SentinelLogAnalyticsWorkspaceOnboardingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetCustomerManagedKeyEnabled">resetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceName">resetWorkspaceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelLogAnalyticsWorkspaceOnboardingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

---

##### `resetCustomerManagedKeyEnabled` <a name="resetCustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetCustomerManagedKeyEnabled"></a>

```typescript
public resetCustomerManagedKeyEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

##### `resetWorkspaceName` <a name="resetWorkspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceName"></a>

```typescript
public resetWorkspaceName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelLogAnalyticsWorkspaceOnboarding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct"></a>

```typescript
import { sentinelLogAnalyticsWorkspaceOnboarding } from '@cdktf/provider-azurerm'

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement"></a>

```typescript
import { sentinelLogAnalyticsWorkspaceOnboarding } from '@cdktf/provider-azurerm'

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource"></a>

```typescript
import { sentinelLogAnalyticsWorkspaceOnboarding } from '@cdktf/provider-azurerm'

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport"></a>

```typescript
import { sentinelLogAnalyticsWorkspaceOnboarding } from '@cdktf/provider-azurerm'

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelLogAnalyticsWorkspaceOnboarding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelLogAnalyticsWorkspaceOnboarding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelLogAnalyticsWorkspaceOnboarding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelLogAnalyticsWorkspaceOnboarding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference">SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabledInput">customerManagedKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceNameInput">workspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceName">workspaceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference">SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference</a>

---

##### `customerManagedKeyEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnabledInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabledInput"></a>

```typescript
public readonly customerManagedKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelLogAnalyticsWorkspaceOnboardingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceNameInput`<sup>Optional</sup> <a name="workspaceNameInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceNameInput"></a>

```typescript
public readonly workspaceNameInput: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelLogAnalyticsWorkspaceOnboardingConfig <a name="SentinelLogAnalyticsWorkspaceOnboardingConfig" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.Initializer"></a>

```typescript
import { sentinelLogAnalyticsWorkspaceOnboarding } from '@cdktf/provider-azurerm'

const sentinelLogAnalyticsWorkspaceOnboardingConfig: sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceName">workspaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelLogAnalyticsWorkspaceOnboardingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#timeouts SentinelLogAnalyticsWorkspaceOnboarding#timeouts}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}.

---

##### `workspaceName`<sup>Optional</sup> <a name="workspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}.

---

### SentinelLogAnalyticsWorkspaceOnboardingTimeouts <a name="SentinelLogAnalyticsWorkspaceOnboardingTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.Initializer"></a>

```typescript
import { sentinelLogAnalyticsWorkspaceOnboarding } from '@cdktf/provider-azurerm'

const sentinelLogAnalyticsWorkspaceOnboardingTimeouts: sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference <a name="SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelLogAnalyticsWorkspaceOnboarding } from '@cdktf/provider-azurerm'

new sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelLogAnalyticsWorkspaceOnboardingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

---



