# `azurerm_resource_policy_remediation`

Refer to the Terraform Registory for docs: [`azurerm_resource_policy_remediation`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation).

# `resourcePolicyRemediation` Submodule <a name="`resourcePolicyRemediation` Submodule" id="@cdktf/provider-azurerm.resourcePolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePolicyRemediation <a name="ResourcePolicyRemediation" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation azurerm_resource_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer"></a>

```typescript
import { resourcePolicyRemediation } from '@cdktf/provider-azurerm'

new resourcePolicyRemediation.ResourcePolicyRemediation(scope: Construct, id: string, config: ResourcePolicyRemediationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig">ResourcePolicyRemediationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig">ResourcePolicyRemediationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetFailurePercentage">resetFailurePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetLocationFilters">resetLocationFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetParallelDeployments">resetParallelDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionId">resetPolicyDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionReferenceId">resetPolicyDefinitionReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceCount">resetResourceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceDiscoveryMode">resetResourceDiscoveryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourcePolicyRemediationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>

---

##### `resetFailurePercentage` <a name="resetFailurePercentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetFailurePercentage"></a>

```typescript
public resetFailurePercentage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationFilters` <a name="resetLocationFilters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetLocationFilters"></a>

```typescript
public resetLocationFilters(): void
```

##### `resetParallelDeployments` <a name="resetParallelDeployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetParallelDeployments"></a>

```typescript
public resetParallelDeployments(): void
```

##### `resetPolicyDefinitionId` <a name="resetPolicyDefinitionId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionId"></a>

```typescript
public resetPolicyDefinitionId(): void
```

##### `resetPolicyDefinitionReferenceId` <a name="resetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```typescript
public resetPolicyDefinitionReferenceId(): void
```

##### `resetResourceCount` <a name="resetResourceCount" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceCount"></a>

```typescript
public resetResourceCount(): void
```

##### `resetResourceDiscoveryMode` <a name="resetResourceDiscoveryMode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceDiscoveryMode"></a>

```typescript
public resetResourceDiscoveryMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct"></a>

```typescript
import { resourcePolicyRemediation } from '@cdktf/provider-azurerm'

resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement"></a>

```typescript
import { resourcePolicyRemediation } from '@cdktf/provider-azurerm'

resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource"></a>

```typescript
import { resourcePolicyRemediation } from '@cdktf/provider-azurerm'

resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference">ResourcePolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentageInput">failurePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFiltersInput">locationFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeploymentsInput">parallelDeploymentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentIdInput">policyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceIdInput">policyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCountInput">resourceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryModeInput">resourceDiscoveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentage">failurePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFilters">locationFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeployments">parallelDeployments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCount">resourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeouts"></a>

```typescript
public readonly timeouts: ResourcePolicyRemediationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference">ResourcePolicyRemediationTimeoutsOutputReference</a>

---

##### `failurePercentageInput`<sup>Optional</sup> <a name="failurePercentageInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentageInput"></a>

```typescript
public readonly failurePercentageInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationFiltersInput`<sup>Optional</sup> <a name="locationFiltersInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFiltersInput"></a>

```typescript
public readonly locationFiltersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parallelDeploymentsInput`<sup>Optional</sup> <a name="parallelDeploymentsInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeploymentsInput"></a>

```typescript
public readonly parallelDeploymentsInput: number;
```

- *Type:* number

---

##### `policyAssignmentIdInput`<sup>Optional</sup> <a name="policyAssignmentIdInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentIdInput"></a>

```typescript
public readonly policyAssignmentIdInput: string;
```

- *Type:* string

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionIdInput"></a>

```typescript
public readonly policyDefinitionIdInput: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```typescript
public readonly policyDefinitionReferenceIdInput: string;
```

- *Type:* string

---

##### `resourceCountInput`<sup>Optional</sup> <a name="resourceCountInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCountInput"></a>

```typescript
public readonly resourceCountInput: number;
```

- *Type:* number

---

##### `resourceDiscoveryModeInput`<sup>Optional</sup> <a name="resourceDiscoveryModeInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryModeInput"></a>

```typescript
public readonly resourceDiscoveryModeInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourcePolicyRemediationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>

---

##### `failurePercentage`<sup>Required</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentage"></a>

```typescript
public readonly failurePercentage: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationFilters`<sup>Required</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFilters"></a>

```typescript
public readonly locationFilters: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parallelDeployments`<sup>Required</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeployments"></a>

```typescript
public readonly parallelDeployments: number;
```

- *Type:* number

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceId`<sup>Required</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* number

---

##### `resourceDiscoveryMode`<sup>Required</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryMode"></a>

```typescript
public readonly resourceDiscoveryMode: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePolicyRemediationConfig <a name="ResourcePolicyRemediationConfig" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.Initializer"></a>

```typescript
import { resourcePolicyRemediation } from '@cdktf/provider-azurerm'

const resourcePolicyRemediationConfig: resourcePolicyRemediation.ResourcePolicyRemediationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#name ResourcePolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#policy_assignment_id ResourcePolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#resource_id ResourcePolicyRemediation#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.failurePercentage">failurePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#failure_percentage ResourcePolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#id ResourcePolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.locationFilters">locationFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#location_filters ResourcePolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.parallelDeployments">parallelDeployments</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#parallel_deployments ResourcePolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#policy_definition_id ResourcePolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#policy_definition_reference_id ResourcePolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceCount">resourceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#resource_count ResourcePolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#resource_discovery_mode ResourcePolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#name ResourcePolicyRemediation#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#policy_assignment_id ResourcePolicyRemediation#policy_assignment_id}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#resource_id ResourcePolicyRemediation#resource_id}.

---

##### `failurePercentage`<sup>Optional</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.failurePercentage"></a>

```typescript
public readonly failurePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#failure_percentage ResourcePolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#id ResourcePolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationFilters`<sup>Optional</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.locationFilters"></a>

```typescript
public readonly locationFilters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#location_filters ResourcePolicyRemediation#location_filters}.

---

##### `parallelDeployments`<sup>Optional</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.parallelDeployments"></a>

```typescript
public readonly parallelDeployments: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#parallel_deployments ResourcePolicyRemediation#parallel_deployments}.

---

##### `policyDefinitionId`<sup>Optional</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#policy_definition_id ResourcePolicyRemediation#policy_definition_id}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```typescript
public readonly policyDefinitionReferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#policy_definition_reference_id ResourcePolicyRemediation#policy_definition_reference_id}.

---

##### `resourceCount`<sup>Optional</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceCount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#resource_count ResourcePolicyRemediation#resource_count}.

---

##### `resourceDiscoveryMode`<sup>Optional</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```typescript
public readonly resourceDiscoveryMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#resource_discovery_mode ResourcePolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourcePolicyRemediationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#timeouts ResourcePolicyRemediation#timeouts}

---

### ResourcePolicyRemediationTimeouts <a name="ResourcePolicyRemediationTimeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.Initializer"></a>

```typescript
import { resourcePolicyRemediation } from '@cdktf/provider-azurerm'

const resourcePolicyRemediationTimeouts: resourcePolicyRemediation.ResourcePolicyRemediationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#create ResourcePolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#delete ResourcePolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#read ResourcePolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#update ResourcePolicyRemediation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#create ResourcePolicyRemediation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#delete ResourcePolicyRemediation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#read ResourcePolicyRemediation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_policy_remediation#update ResourcePolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcePolicyRemediationTimeoutsOutputReference <a name="ResourcePolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourcePolicyRemediation } from '@cdktf/provider-azurerm'

new resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourcePolicyRemediationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>

---



