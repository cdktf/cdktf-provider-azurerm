# `subscriptionPolicyAssignment` Submodule <a name="`subscriptionPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionPolicyAssignment <a name="SubscriptionPolicyAssignment" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment azurerm_subscription_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

new subscriptionPolicyAssignment.SubscriptionPolicyAssignment(scope: Construct, id: string, config: SubscriptionPolicyAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig">SubscriptionPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig">SubscriptionPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putNonComplianceMessage">putNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetNonComplianceMessage">resetNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetNotScopes">resetNotScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putIdentity"></a>

```typescript
public putIdentity(value: SubscriptionPolicyAssignmentIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a>

---

##### `putNonComplianceMessage` <a name="putNonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putNonComplianceMessage"></a>

```typescript
public putNonComplianceMessage(value: IResolvable | SubscriptionPolicyAssignmentNonComplianceMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: SubscriptionPolicyAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNonComplianceMessage` <a name="resetNonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetNonComplianceMessage"></a>

```typescript
public resetNonComplianceMessage(): void
```

##### `resetNotScopes` <a name="resetNotScopes" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetNotScopes"></a>

```typescript
public resetNotScopes(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isConstruct"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformElement"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformResource"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference">SubscriptionPolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nonComplianceMessage">nonComplianceMessage</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList">SubscriptionPolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference">SubscriptionPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.enforceInput">enforceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nonComplianceMessageInput">nonComplianceMessageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.notScopesInput">notScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.notScopes">notScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.identity"></a>

```typescript
public readonly identity: SubscriptionPolicyAssignmentIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference">SubscriptionPolicyAssignmentIdentityOutputReference</a>

---

##### `nonComplianceMessage`<sup>Required</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nonComplianceMessage"></a>

```typescript
public readonly nonComplianceMessage: SubscriptionPolicyAssignmentNonComplianceMessageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList">SubscriptionPolicyAssignmentNonComplianceMessageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: SubscriptionPolicyAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference">SubscriptionPolicyAssignmentTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.enforceInput"></a>

```typescript
public readonly enforceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.identityInput"></a>

```typescript
public readonly identityInput: SubscriptionPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nonComplianceMessageInput`<sup>Optional</sup> <a name="nonComplianceMessageInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nonComplianceMessageInput"></a>

```typescript
public readonly nonComplianceMessageInput: IResolvable | SubscriptionPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a>[]

---

##### `notScopesInput`<sup>Optional</sup> <a name="notScopesInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.notScopesInput"></a>

```typescript
public readonly notScopesInput: string[];
```

- *Type:* string[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.policyDefinitionIdInput"></a>

```typescript
public readonly policyDefinitionIdInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SubscriptionPolicyAssignmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notScopes`<sup>Required</sup> <a name="notScopes" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.notScopes"></a>

```typescript
public readonly notScopes: string[];
```

- *Type:* string[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionPolicyAssignmentConfig <a name="SubscriptionPolicyAssignmentConfig" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

const subscriptionPolicyAssignmentConfig: subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#name SubscriptionPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#policy_definition_id SubscriptionPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#subscription_id SubscriptionPolicyAssignment#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#description SubscriptionPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#display_name SubscriptionPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#enforce SubscriptionPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#id SubscriptionPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#location SubscriptionPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#metadata SubscriptionPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.nonComplianceMessage">nonComplianceMessage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a>[]</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.notScopes">notScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#not_scopes SubscriptionPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#parameters SubscriptionPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#name SubscriptionPolicyAssignment#name}.

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#policy_definition_id SubscriptionPolicyAssignment#policy_definition_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#subscription_id SubscriptionPolicyAssignment#subscription_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#description SubscriptionPolicyAssignment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#display_name SubscriptionPolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#enforce SubscriptionPolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#id SubscriptionPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.identity"></a>

```typescript
public readonly identity: SubscriptionPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#identity SubscriptionPolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#location SubscriptionPolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#metadata SubscriptionPolicyAssignment#metadata}.

---

##### `nonComplianceMessage`<sup>Optional</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.nonComplianceMessage"></a>

```typescript
public readonly nonComplianceMessage: IResolvable | SubscriptionPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a>[]

non_compliance_message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#non_compliance_message SubscriptionPolicyAssignment#non_compliance_message}

---

##### `notScopes`<sup>Optional</sup> <a name="notScopes" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.notScopes"></a>

```typescript
public readonly notScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#not_scopes SubscriptionPolicyAssignment#not_scopes}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#parameters SubscriptionPolicyAssignment#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SubscriptionPolicyAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#timeouts SubscriptionPolicyAssignment#timeouts}

---

### SubscriptionPolicyAssignmentIdentity <a name="SubscriptionPolicyAssignmentIdentity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

const subscriptionPolicyAssignmentIdentity: subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#type SubscriptionPolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#identity_ids SubscriptionPolicyAssignment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#type SubscriptionPolicyAssignment#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#identity_ids SubscriptionPolicyAssignment#identity_ids}.

---

### SubscriptionPolicyAssignmentNonComplianceMessage <a name="SubscriptionPolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

const subscriptionPolicyAssignmentNonComplianceMessage: subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#content SubscriptionPolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#policy_definition_reference_id SubscriptionPolicyAssignment#policy_definition_reference_id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#content SubscriptionPolicyAssignment#content}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#policy_definition_reference_id SubscriptionPolicyAssignment#policy_definition_reference_id}.

---

### SubscriptionPolicyAssignmentTimeouts <a name="SubscriptionPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

const subscriptionPolicyAssignmentTimeouts: subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#create SubscriptionPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#delete SubscriptionPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#read SubscriptionPolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#update SubscriptionPolicyAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#create SubscriptionPolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#delete SubscriptionPolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#read SubscriptionPolicyAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subscription_policy_assignment#update SubscriptionPolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionPolicyAssignmentIdentityOutputReference <a name="SubscriptionPolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

new subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SubscriptionPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a>

---


### SubscriptionPolicyAssignmentNonComplianceMessageList <a name="SubscriptionPolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

new subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.get"></a>

```typescript
public get(index: number): SubscriptionPolicyAssignmentNonComplianceMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubscriptionPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a>[]

---


### SubscriptionPolicyAssignmentNonComplianceMessageOutputReference <a name="SubscriptionPolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

new subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">resetPolicyDefinitionReferenceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDefinitionReferenceId` <a name="resetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```typescript
public resetPolicyDefinitionReferenceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">policyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```typescript
public readonly policyDefinitionReferenceIdInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceId`<sup>Required</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SubscriptionPolicyAssignmentNonComplianceMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage">SubscriptionPolicyAssignmentNonComplianceMessage</a> | cdktf.IResolvable

---


### SubscriptionPolicyAssignmentTimeoutsOutputReference <a name="SubscriptionPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { subscriptionPolicyAssignment } from '@cdktf/provider-azurerm'

new subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SubscriptionPolicyAssignmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a> | cdktf.IResolvable

---



