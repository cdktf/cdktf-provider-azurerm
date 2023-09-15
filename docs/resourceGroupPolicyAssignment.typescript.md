# `azurerm_resource_group_policy_assignment`

Refer to the Terraform Registory for docs: [`azurerm_resource_group_policy_assignment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment).

# `resourceGroupPolicyAssignment` Submodule <a name="`resourceGroupPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupPolicyAssignment <a name="ResourceGroupPolicyAssignment" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment azurerm_resource_group_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment(scope: Construct, id: string, config: ResourceGroupPolicyAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig">ResourceGroupPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig">ResourceGroupPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putNonComplianceMessage">putNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putResourceSelectors">putResourceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetNonComplianceMessage">resetNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetNotScopes">resetNotScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetResourceSelectors">resetResourceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putIdentity"></a>

```typescript
public putIdentity(value: ResourceGroupPolicyAssignmentIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

---

##### `putNonComplianceMessage` <a name="putNonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putNonComplianceMessage"></a>

```typescript
public putNonComplianceMessage(value: IResolvable | ResourceGroupPolicyAssignmentNonComplianceMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>[]

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putOverrides"></a>

```typescript
public putOverrides(value: IResolvable | ResourceGroupPolicyAssignmentOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a>[]

---

##### `putResourceSelectors` <a name="putResourceSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putResourceSelectors"></a>

```typescript
public putResourceSelectors(value: IResolvable | ResourceGroupPolicyAssignmentResourceSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putResourceSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceGroupPolicyAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNonComplianceMessage` <a name="resetNonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetNonComplianceMessage"></a>

```typescript
public resetNonComplianceMessage(): void
```

##### `resetNotScopes` <a name="resetNotScopes" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetNotScopes"></a>

```typescript
public resetNotScopes(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetOverrides"></a>

```typescript
public resetOverrides(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetResourceSelectors` <a name="resetResourceSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetResourceSelectors"></a>

```typescript
public resetResourceSelectors(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isConstruct"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformElement"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformResource"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference">ResourceGroupPolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nonComplianceMessage">nonComplianceMessage</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList">ResourceGroupPolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList">ResourceGroupPolicyAssignmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceSelectors">resourceSelectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList">ResourceGroupPolicyAssignmentResourceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference">ResourceGroupPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.enforceInput">enforceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nonComplianceMessageInput">nonComplianceMessageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.notScopesInput">notScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.overridesInput">overridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceSelectorsInput">resourceSelectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.notScopes">notScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.identity"></a>

```typescript
public readonly identity: ResourceGroupPolicyAssignmentIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference">ResourceGroupPolicyAssignmentIdentityOutputReference</a>

---

##### `nonComplianceMessage`<sup>Required</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nonComplianceMessage"></a>

```typescript
public readonly nonComplianceMessage: ResourceGroupPolicyAssignmentNonComplianceMessageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList">ResourceGroupPolicyAssignmentNonComplianceMessageList</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.overrides"></a>

```typescript
public readonly overrides: ResourceGroupPolicyAssignmentOverridesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList">ResourceGroupPolicyAssignmentOverridesList</a>

---

##### `resourceSelectors`<sup>Required</sup> <a name="resourceSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceSelectors"></a>

```typescript
public readonly resourceSelectors: ResourceGroupPolicyAssignmentResourceSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList">ResourceGroupPolicyAssignmentResourceSelectorsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceGroupPolicyAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference">ResourceGroupPolicyAssignmentTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.enforceInput"></a>

```typescript
public readonly enforceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.identityInput"></a>

```typescript
public readonly identityInput: ResourceGroupPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nonComplianceMessageInput`<sup>Optional</sup> <a name="nonComplianceMessageInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nonComplianceMessageInput"></a>

```typescript
public readonly nonComplianceMessageInput: IResolvable | ResourceGroupPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>[]

---

##### `notScopesInput`<sup>Optional</sup> <a name="notScopesInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.notScopesInput"></a>

```typescript
public readonly notScopesInput: string[];
```

- *Type:* string[]

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | ResourceGroupPolicyAssignmentOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a>[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.policyDefinitionIdInput"></a>

```typescript
public readonly policyDefinitionIdInput: string;
```

- *Type:* string

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceGroupIdInput"></a>

```typescript
public readonly resourceGroupIdInput: string;
```

- *Type:* string

---

##### `resourceSelectorsInput`<sup>Optional</sup> <a name="resourceSelectorsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceSelectorsInput"></a>

```typescript
public readonly resourceSelectorsInput: IResolvable | ResourceGroupPolicyAssignmentResourceSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceGroupPolicyAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notScopes`<sup>Required</sup> <a name="notScopes" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.notScopes"></a>

```typescript
public readonly notScopes: string[];
```

- *Type:* string[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupPolicyAssignmentConfig <a name="ResourceGroupPolicyAssignmentConfig" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const resourceGroupPolicyAssignmentConfig: resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#policy_definition_id ResourceGroupPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#resource_group_id ResourceGroupPolicyAssignment#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#description ResourceGroupPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#display_name ResourceGroupPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#enforce ResourceGroupPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#id ResourceGroupPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#location ResourceGroupPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#metadata ResourceGroupPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.nonComplianceMessage">nonComplianceMessage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>[]</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.notScopes">notScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#not_scopes ResourceGroupPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.overrides">overrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a>[]</code> | overrides block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#parameters ResourceGroupPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.resourceSelectors">resourceSelectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a>[]</code> | resource_selectors block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}.

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#policy_definition_id ResourceGroupPolicyAssignment#policy_definition_id}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#resource_group_id ResourceGroupPolicyAssignment#resource_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#description ResourceGroupPolicyAssignment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#display_name ResourceGroupPolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#enforce ResourceGroupPolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#id ResourceGroupPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.identity"></a>

```typescript
public readonly identity: ResourceGroupPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#identity ResourceGroupPolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#location ResourceGroupPolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#metadata ResourceGroupPolicyAssignment#metadata}.

---

##### `nonComplianceMessage`<sup>Optional</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.nonComplianceMessage"></a>

```typescript
public readonly nonComplianceMessage: IResolvable | ResourceGroupPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>[]

non_compliance_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#non_compliance_message ResourceGroupPolicyAssignment#non_compliance_message}

---

##### `notScopes`<sup>Optional</sup> <a name="notScopes" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.notScopes"></a>

```typescript
public readonly notScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#not_scopes ResourceGroupPolicyAssignment#not_scopes}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.overrides"></a>

```typescript
public readonly overrides: IResolvable | ResourceGroupPolicyAssignmentOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a>[]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#overrides ResourceGroupPolicyAssignment#overrides}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#parameters ResourceGroupPolicyAssignment#parameters}.

---

##### `resourceSelectors`<sup>Optional</sup> <a name="resourceSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.resourceSelectors"></a>

```typescript
public readonly resourceSelectors: IResolvable | ResourceGroupPolicyAssignmentResourceSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a>[]

resource_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#resource_selectors ResourceGroupPolicyAssignment#resource_selectors}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceGroupPolicyAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#timeouts ResourceGroupPolicyAssignment#timeouts}

---

### ResourceGroupPolicyAssignmentIdentity <a name="ResourceGroupPolicyAssignmentIdentity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const resourceGroupPolicyAssignmentIdentity: resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#type ResourceGroupPolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#identity_ids ResourceGroupPolicyAssignment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#type ResourceGroupPolicyAssignment#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#identity_ids ResourceGroupPolicyAssignment#identity_ids}.

---

### ResourceGroupPolicyAssignmentNonComplianceMessage <a name="ResourceGroupPolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const resourceGroupPolicyAssignmentNonComplianceMessage: resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#content ResourceGroupPolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#policy_definition_reference_id ResourceGroupPolicyAssignment#policy_definition_reference_id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#content ResourceGroupPolicyAssignment#content}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#policy_definition_reference_id ResourceGroupPolicyAssignment#policy_definition_reference_id}.

---

### ResourceGroupPolicyAssignmentOverrides <a name="ResourceGroupPolicyAssignmentOverrides" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const resourceGroupPolicyAssignmentOverrides: resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#value ResourceGroupPolicyAssignment#value}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides.property.selectors">selectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a>[]</code> | selectors block. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#value ResourceGroupPolicyAssignment#value}.

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides.property.selectors"></a>

```typescript
public readonly selectors: IResolvable | ResourceGroupPolicyAssignmentOverridesSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a>[]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#selectors ResourceGroupPolicyAssignment#selectors}

---

### ResourceGroupPolicyAssignmentOverridesSelectors <a name="ResourceGroupPolicyAssignmentOverridesSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const resourceGroupPolicyAssignmentOverridesSelectors: resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors.property.in">in</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#in ResourceGroupPolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors.property.notIn">notIn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#not_in ResourceGroupPolicyAssignment#not_in}. |

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors.property.in"></a>

```typescript
public readonly in: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#in ResourceGroupPolicyAssignment#in}.

---

##### `notIn`<sup>Optional</sup> <a name="notIn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors.property.notIn"></a>

```typescript
public readonly notIn: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#not_in ResourceGroupPolicyAssignment#not_in}.

---

### ResourceGroupPolicyAssignmentResourceSelectors <a name="ResourceGroupPolicyAssignmentResourceSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const resourceGroupPolicyAssignmentResourceSelectors: resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors.property.selectors">selectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a>[]</code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}. |

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors.property.selectors"></a>

```typescript
public readonly selectors: IResolvable | ResourceGroupPolicyAssignmentResourceSelectorsSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a>[]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#selectors ResourceGroupPolicyAssignment#selectors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}.

---

### ResourceGroupPolicyAssignmentResourceSelectorsSelectors <a name="ResourceGroupPolicyAssignmentResourceSelectorsSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const resourceGroupPolicyAssignmentResourceSelectorsSelectors: resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#kind ResourceGroupPolicyAssignment#kind}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors.property.in">in</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#in ResourceGroupPolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors.property.notIn">notIn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#not_in ResourceGroupPolicyAssignment#not_in}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#kind ResourceGroupPolicyAssignment#kind}.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors.property.in"></a>

```typescript
public readonly in: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#in ResourceGroupPolicyAssignment#in}.

---

##### `notIn`<sup>Optional</sup> <a name="notIn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors.property.notIn"></a>

```typescript
public readonly notIn: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#not_in ResourceGroupPolicyAssignment#not_in}.

---

### ResourceGroupPolicyAssignmentTimeouts <a name="ResourceGroupPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

const resourceGroupPolicyAssignmentTimeouts: resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#create ResourceGroupPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#delete ResourceGroupPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#read ResourceGroupPolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#update ResourceGroupPolicyAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#create ResourceGroupPolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#delete ResourceGroupPolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#read ResourceGroupPolicyAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/resource_group_policy_assignment#update ResourceGroupPolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupPolicyAssignmentIdentityOutputReference <a name="ResourceGroupPolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourceGroupPolicyAssignmentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

---


### ResourceGroupPolicyAssignmentNonComplianceMessageList <a name="ResourceGroupPolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.get"></a>

```typescript
public get(index: number): ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentNonComplianceMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>[]

---


### ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference <a name="ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">resetPolicyDefinitionReferenceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDefinitionReferenceId` <a name="resetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```typescript
public resetPolicyDefinitionReferenceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">policyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```typescript
public readonly policyDefinitionReferenceIdInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceId`<sup>Required</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentNonComplianceMessage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>

---


### ResourceGroupPolicyAssignmentOverridesList <a name="ResourceGroupPolicyAssignmentOverridesList" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.get"></a>

```typescript
public get(index: number): ResourceGroupPolicyAssignmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a>[]

---


### ResourceGroupPolicyAssignmentOverridesOutputReference <a name="ResourceGroupPolicyAssignmentOverridesOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.resetSelectors">resetSelectors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.putSelectors"></a>

```typescript
public putSelectors(value: IResolvable | ResourceGroupPolicyAssignmentOverridesSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a>[]

---

##### `resetSelectors` <a name="resetSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.resetSelectors"></a>

```typescript
public resetSelectors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList">ResourceGroupPolicyAssignmentOverridesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.selectors"></a>

```typescript
public readonly selectors: ResourceGroupPolicyAssignmentOverridesSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList">ResourceGroupPolicyAssignmentOverridesSelectorsList</a>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | ResourceGroupPolicyAssignmentOverridesSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a>[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverrides">ResourceGroupPolicyAssignmentOverrides</a>

---


### ResourceGroupPolicyAssignmentOverridesSelectorsList <a name="ResourceGroupPolicyAssignmentOverridesSelectorsList" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.get"></a>

```typescript
public get(index: number): ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentOverridesSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a>[]

---


### ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference <a name="ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.resetNotIn">resetNotIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIn` <a name="resetIn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetNotIn` <a name="resetNotIn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.resetNotIn"></a>

```typescript
public resetNotIn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.inInput">inInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.notInInput">notInInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.in">in</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.notIn">notIn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.inInput"></a>

```typescript
public readonly inInput: string[];
```

- *Type:* string[]

---

##### `notInInput`<sup>Optional</sup> <a name="notInInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.notInInput"></a>

```typescript
public readonly notInInput: string[];
```

- *Type:* string[]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.in"></a>

```typescript
public readonly in: string[];
```

- *Type:* string[]

---

##### `notIn`<sup>Required</sup> <a name="notIn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.notIn"></a>

```typescript
public readonly notIn: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentOverridesSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentOverridesSelectors">ResourceGroupPolicyAssignmentOverridesSelectors</a>

---


### ResourceGroupPolicyAssignmentResourceSelectorsList <a name="ResourceGroupPolicyAssignmentResourceSelectorsList" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.get"></a>

```typescript
public get(index: number): ResourceGroupPolicyAssignmentResourceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentResourceSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a>[]

---


### ResourceGroupPolicyAssignmentResourceSelectorsOutputReference <a name="ResourceGroupPolicyAssignmentResourceSelectorsOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.putSelectors"></a>

```typescript
public putSelectors(value: IResolvable | ResourceGroupPolicyAssignmentResourceSelectorsSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a>[]

---

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList">ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.selectors"></a>

```typescript
public readonly selectors: ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList">ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | ResourceGroupPolicyAssignmentResourceSelectorsSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentResourceSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectors">ResourceGroupPolicyAssignmentResourceSelectors</a>

---


### ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList <a name="ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.get"></a>

```typescript
public get(index: number): ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentResourceSelectorsSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a>[]

---


### ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference <a name="ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn">resetNotIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIn` <a name="resetIn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetNotIn` <a name="resetNotIn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn"></a>

```typescript
public resetNotIn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput">inInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput">notInInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in">in</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn">notIn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput"></a>

```typescript
public readonly inInput: string[];
```

- *Type:* string[]

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `notInInput`<sup>Optional</sup> <a name="notInInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput"></a>

```typescript
public readonly notInInput: string[];
```

- *Type:* string[]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in"></a>

```typescript
public readonly in: string[];
```

- *Type:* string[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `notIn`<sup>Required</sup> <a name="notIn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn"></a>

```typescript
public readonly notIn: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentResourceSelectorsSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentResourceSelectorsSelectors">ResourceGroupPolicyAssignmentResourceSelectorsSelectors</a>

---


### ResourceGroupPolicyAssignmentTimeoutsOutputReference <a name="ResourceGroupPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceGroupPolicyAssignment } from '@cdktf/provider-azurerm'

new resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a>

---



