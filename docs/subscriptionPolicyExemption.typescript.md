# `azurerm_subscription_policy_exemption`

Refer to the Terraform Registory for docs: [`azurerm_subscription_policy_exemption`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption).

# `subscriptionPolicyExemption` Submodule <a name="`subscriptionPolicyExemption` Submodule" id="@cdktf/provider-azurerm.subscriptionPolicyExemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionPolicyExemption <a name="SubscriptionPolicyExemption" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption azurerm_subscription_policy_exemption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer"></a>

```typescript
import { subscriptionPolicyExemption } from '@cdktf/provider-azurerm'

new subscriptionPolicyExemption.SubscriptionPolicyExemption(scope: Construct, id: string, config: SubscriptionPolicyExemptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig">SubscriptionPolicyExemptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig">SubscriptionPolicyExemptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetPolicyDefinitionReferenceIds">resetPolicyDefinitionReferenceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.putTimeouts"></a>

```typescript
public putTimeouts(value: SubscriptionPolicyExemptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetExpiresOn"></a>

```typescript
public resetExpiresOn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetPolicyDefinitionReferenceIds` <a name="resetPolicyDefinitionReferenceIds" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetPolicyDefinitionReferenceIds"></a>

```typescript
public resetPolicyDefinitionReferenceIds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isConstruct"></a>

```typescript
import { subscriptionPolicyExemption } from '@cdktf/provider-azurerm'

subscriptionPolicyExemption.SubscriptionPolicyExemption.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformElement"></a>

```typescript
import { subscriptionPolicyExemption } from '@cdktf/provider-azurerm'

subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformResource"></a>

```typescript
import { subscriptionPolicyExemption } from '@cdktf/provider-azurerm'

subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference">SubscriptionPolicyExemptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.exemptionCategoryInput">exemptionCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.expiresOnInput">expiresOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyAssignmentIdInput">policyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyDefinitionReferenceIdsInput">policyDefinitionReferenceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.exemptionCategory">exemptionCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.timeouts"></a>

```typescript
public readonly timeouts: SubscriptionPolicyExemptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference">SubscriptionPolicyExemptionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `exemptionCategoryInput`<sup>Optional</sup> <a name="exemptionCategoryInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.exemptionCategoryInput"></a>

```typescript
public readonly exemptionCategoryInput: string;
```

- *Type:* string

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.expiresOnInput"></a>

```typescript
public readonly expiresOnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyAssignmentIdInput`<sup>Optional</sup> <a name="policyAssignmentIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyAssignmentIdInput"></a>

```typescript
public readonly policyAssignmentIdInput: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIdsInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdsInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyDefinitionReferenceIdsInput"></a>

```typescript
public readonly policyDefinitionReferenceIdsInput: string[];
```

- *Type:* string[]

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubscriptionPolicyExemptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.exemptionCategory"></a>

```typescript
public readonly exemptionCategory: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIds`<sup>Required</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyDefinitionReferenceIds"></a>

```typescript
public readonly policyDefinitionReferenceIds: string[];
```

- *Type:* string[]

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionPolicyExemptionConfig <a name="SubscriptionPolicyExemptionConfig" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.Initializer"></a>

```typescript
import { subscriptionPolicyExemption } from '@cdktf/provider-azurerm'

const subscriptionPolicyExemptionConfig: subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.exemptionCategory">exemptionCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#exemption_category SubscriptionPolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#name SubscriptionPolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#policy_assignment_id SubscriptionPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#subscription_id SubscriptionPolicyExemption#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#description SubscriptionPolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#display_name SubscriptionPolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.expiresOn">expiresOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#expires_on SubscriptionPolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#id SubscriptionPolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#metadata SubscriptionPolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#policy_definition_reference_ids SubscriptionPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.exemptionCategory"></a>

```typescript
public readonly exemptionCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#exemption_category SubscriptionPolicyExemption#exemption_category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#name SubscriptionPolicyExemption#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#policy_assignment_id SubscriptionPolicyExemption#policy_assignment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#subscription_id SubscriptionPolicyExemption#subscription_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#description SubscriptionPolicyExemption#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#display_name SubscriptionPolicyExemption#display_name}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#expires_on SubscriptionPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#id SubscriptionPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#metadata SubscriptionPolicyExemption#metadata}.

---

##### `policyDefinitionReferenceIds`<sup>Optional</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.policyDefinitionReferenceIds"></a>

```typescript
public readonly policyDefinitionReferenceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#policy_definition_reference_ids SubscriptionPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SubscriptionPolicyExemptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#timeouts SubscriptionPolicyExemption#timeouts}

---

### SubscriptionPolicyExemptionTimeouts <a name="SubscriptionPolicyExemptionTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.Initializer"></a>

```typescript
import { subscriptionPolicyExemption } from '@cdktf/provider-azurerm'

const subscriptionPolicyExemptionTimeouts: subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#create SubscriptionPolicyExemption#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#delete SubscriptionPolicyExemption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#read SubscriptionPolicyExemption#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#update SubscriptionPolicyExemption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#create SubscriptionPolicyExemption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#delete SubscriptionPolicyExemption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#read SubscriptionPolicyExemption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/subscription_policy_exemption#update SubscriptionPolicyExemption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionPolicyExemptionTimeoutsOutputReference <a name="SubscriptionPolicyExemptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { subscriptionPolicyExemption } from '@cdktf/provider-azurerm'

new subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubscriptionPolicyExemptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

---



