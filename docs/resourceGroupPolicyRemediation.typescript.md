# `azurerm_resource_group_policy_remediation`

Refer to the Terraform Registory for docs: [`azurerm_resource_group_policy_remediation`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation).

# `resourceGroupPolicyRemediation` Submodule <a name="`resourceGroupPolicyRemediation` Submodule" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupPolicyRemediation <a name="ResourceGroupPolicyRemediation" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation azurerm_resource_group_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer"></a>

```typescript
import { resourceGroupPolicyRemediation } from '@cdktf/provider-azurerm'

new resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation(scope: Construct, id: string, config: ResourceGroupPolicyRemediationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig">ResourceGroupPolicyRemediationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig">ResourceGroupPolicyRemediationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetFailurePercentage">resetFailurePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetLocationFilters">resetLocationFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetParallelDeployments">resetParallelDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionId">resetPolicyDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionReferenceId">resetPolicyDefinitionReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceCount">resetResourceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceDiscoveryMode">resetResourceDiscoveryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceGroupPolicyRemediationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>

---

##### `resetFailurePercentage` <a name="resetFailurePercentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetFailurePercentage"></a>

```typescript
public resetFailurePercentage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationFilters` <a name="resetLocationFilters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetLocationFilters"></a>

```typescript
public resetLocationFilters(): void
```

##### `resetParallelDeployments` <a name="resetParallelDeployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetParallelDeployments"></a>

```typescript
public resetParallelDeployments(): void
```

##### `resetPolicyDefinitionId` <a name="resetPolicyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionId"></a>

```typescript
public resetPolicyDefinitionId(): void
```

##### `resetPolicyDefinitionReferenceId` <a name="resetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```typescript
public resetPolicyDefinitionReferenceId(): void
```

##### `resetResourceCount` <a name="resetResourceCount" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceCount"></a>

```typescript
public resetResourceCount(): void
```

##### `resetResourceDiscoveryMode` <a name="resetResourceDiscoveryMode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceDiscoveryMode"></a>

```typescript
public resetResourceDiscoveryMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct"></a>

```typescript
import { resourceGroupPolicyRemediation } from '@cdktf/provider-azurerm'

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement"></a>

```typescript
import { resourceGroupPolicyRemediation } from '@cdktf/provider-azurerm'

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource"></a>

```typescript
import { resourceGroupPolicyRemediation } from '@cdktf/provider-azurerm'

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference">ResourceGroupPolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentageInput">failurePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFiltersInput">locationFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeploymentsInput">parallelDeploymentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentIdInput">policyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceIdInput">policyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCountInput">resourceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryModeInput">resourceDiscoveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentage">failurePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFilters">locationFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeployments">parallelDeployments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCount">resourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceGroupPolicyRemediationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference">ResourceGroupPolicyRemediationTimeoutsOutputReference</a>

---

##### `failurePercentageInput`<sup>Optional</sup> <a name="failurePercentageInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentageInput"></a>

```typescript
public readonly failurePercentageInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationFiltersInput`<sup>Optional</sup> <a name="locationFiltersInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFiltersInput"></a>

```typescript
public readonly locationFiltersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parallelDeploymentsInput`<sup>Optional</sup> <a name="parallelDeploymentsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeploymentsInput"></a>

```typescript
public readonly parallelDeploymentsInput: number;
```

- *Type:* number

---

##### `policyAssignmentIdInput`<sup>Optional</sup> <a name="policyAssignmentIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentIdInput"></a>

```typescript
public readonly policyAssignmentIdInput: string;
```

- *Type:* string

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionIdInput"></a>

```typescript
public readonly policyDefinitionIdInput: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```typescript
public readonly policyDefinitionReferenceIdInput: string;
```

- *Type:* string

---

##### `resourceCountInput`<sup>Optional</sup> <a name="resourceCountInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCountInput"></a>

```typescript
public readonly resourceCountInput: number;
```

- *Type:* number

---

##### `resourceDiscoveryModeInput`<sup>Optional</sup> <a name="resourceDiscoveryModeInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryModeInput"></a>

```typescript
public readonly resourceDiscoveryModeInput: string;
```

- *Type:* string

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupIdInput"></a>

```typescript
public readonly resourceGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceGroupPolicyRemediationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>

---

##### `failurePercentage`<sup>Required</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentage"></a>

```typescript
public readonly failurePercentage: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationFilters`<sup>Required</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFilters"></a>

```typescript
public readonly locationFilters: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parallelDeployments`<sup>Required</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeployments"></a>

```typescript
public readonly parallelDeployments: number;
```

- *Type:* number

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceId`<sup>Required</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* number

---

##### `resourceDiscoveryMode`<sup>Required</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryMode"></a>

```typescript
public readonly resourceDiscoveryMode: string;
```

- *Type:* string

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupPolicyRemediationConfig <a name="ResourceGroupPolicyRemediationConfig" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.Initializer"></a>

```typescript
import { resourceGroupPolicyRemediation } from '@cdktf/provider-azurerm'

const resourceGroupPolicyRemediationConfig: resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.failurePercentage">failurePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.locationFilters">locationFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.parallelDeployments">parallelDeployments</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_definition_id ResourceGroupPolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceCount">resourceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}.

---

##### `failurePercentage`<sup>Optional</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.failurePercentage"></a>

```typescript
public readonly failurePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationFilters`<sup>Optional</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.locationFilters"></a>

```typescript
public readonly locationFilters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}.

---

##### `parallelDeployments`<sup>Optional</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.parallelDeployments"></a>

```typescript
public readonly parallelDeployments: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}.

---

##### `policyDefinitionId`<sup>Optional</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_definition_id ResourceGroupPolicyRemediation#policy_definition_id}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}.

---

##### `resourceCount`<sup>Optional</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceCount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}.

---

##### `resourceDiscoveryMode`<sup>Optional</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```typescript
public readonly resourceDiscoveryMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceGroupPolicyRemediationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#timeouts ResourceGroupPolicyRemediation#timeouts}

---

### ResourceGroupPolicyRemediationTimeouts <a name="ResourceGroupPolicyRemediationTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.Initializer"></a>

```typescript
import { resourceGroupPolicyRemediation } from '@cdktf/provider-azurerm'

const resourceGroupPolicyRemediationTimeouts: resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#create ResourceGroupPolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#delete ResourceGroupPolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#read ResourceGroupPolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#update ResourceGroupPolicyRemediation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#create ResourceGroupPolicyRemediation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#delete ResourceGroupPolicyRemediation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#read ResourceGroupPolicyRemediation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/resource_group_policy_remediation#update ResourceGroupPolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupPolicyRemediationTimeoutsOutputReference <a name="ResourceGroupPolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceGroupPolicyRemediation } from '@cdktf/provider-azurerm'

new resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupPolicyRemediationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>

---



