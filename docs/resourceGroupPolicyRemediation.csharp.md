# `azurerm_resource_group_policy_remediation`

Refer to the Terraform Registory for docs: [`azurerm_resource_group_policy_remediation`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation).

# `resourceGroupPolicyRemediation` Submodule <a name="`resourceGroupPolicyRemediation` Submodule" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupPolicyRemediation <a name="ResourceGroupPolicyRemediation" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation azurerm_resource_group_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupPolicyRemediation(Construct Scope, string Id, ResourceGroupPolicyRemediationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig">ResourceGroupPolicyRemediationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig">ResourceGroupPolicyRemediationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetFailurePercentage">ResetFailurePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetLocationFilters">ResetLocationFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetParallelDeployments">ResetParallelDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionId">ResetPolicyDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionReferenceId">ResetPolicyDefinitionReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceCount">ResetResourceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceDiscoveryMode">ResetResourceDiscoveryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts"></a>

```csharp
private void PutTimeouts(ResourceGroupPolicyRemediationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>

---

##### `ResetFailurePercentage` <a name="ResetFailurePercentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetFailurePercentage"></a>

```csharp
private void ResetFailurePercentage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationFilters` <a name="ResetLocationFilters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetLocationFilters"></a>

```csharp
private void ResetLocationFilters()
```

##### `ResetParallelDeployments` <a name="ResetParallelDeployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetParallelDeployments"></a>

```csharp
private void ResetParallelDeployments()
```

##### `ResetPolicyDefinitionId` <a name="ResetPolicyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionId"></a>

```csharp
private void ResetPolicyDefinitionId()
```

##### `ResetPolicyDefinitionReferenceId` <a name="ResetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```csharp
private void ResetPolicyDefinitionReferenceId()
```

##### `ResetResourceCount` <a name="ResetResourceCount" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceCount"></a>

```csharp
private void ResetResourceCount()
```

##### `ResetResourceDiscoveryMode` <a name="ResetResourceDiscoveryMode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceDiscoveryMode"></a>

```csharp
private void ResetResourceDiscoveryMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceGroupPolicyRemediation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceGroupPolicyRemediation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceGroupPolicyRemediation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference">ResourceGroupPolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentageInput">FailurePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFiltersInput">LocationFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeploymentsInput">ParallelDeploymentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentIdInput">PolicyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionIdInput">PolicyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceIdInput">PolicyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCountInput">ResourceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryModeInput">ResourceDiscoveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFilters">LocationFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeployments">ParallelDeployments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCount">ResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryMode">ResourceDiscoveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeouts"></a>

```csharp
public ResourceGroupPolicyRemediationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference">ResourceGroupPolicyRemediationTimeoutsOutputReference</a>

---

##### `FailurePercentageInput`<sup>Optional</sup> <a name="FailurePercentageInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentageInput"></a>

```csharp
public double FailurePercentageInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationFiltersInput`<sup>Optional</sup> <a name="LocationFiltersInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFiltersInput"></a>

```csharp
public string[] LocationFiltersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParallelDeploymentsInput`<sup>Optional</sup> <a name="ParallelDeploymentsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeploymentsInput"></a>

```csharp
public double ParallelDeploymentsInput { get; }
```

- *Type:* double

---

##### `PolicyAssignmentIdInput`<sup>Optional</sup> <a name="PolicyAssignmentIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentIdInput"></a>

```csharp
public string PolicyAssignmentIdInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionIdInput`<sup>Optional</sup> <a name="PolicyDefinitionIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionIdInput"></a>

```csharp
public string PolicyDefinitionIdInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```csharp
public string PolicyDefinitionReferenceIdInput { get; }
```

- *Type:* string

---

##### `ResourceCountInput`<sup>Optional</sup> <a name="ResourceCountInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCountInput"></a>

```csharp
public double ResourceCountInput { get; }
```

- *Type:* double

---

##### `ResourceDiscoveryModeInput`<sup>Optional</sup> <a name="ResourceDiscoveryModeInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryModeInput"></a>

```csharp
public string ResourceDiscoveryModeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupIdInput"></a>

```csharp
public string ResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FailurePercentage`<sup>Required</sup> <a name="FailurePercentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationFilters`<sup>Required</sup> <a name="LocationFilters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFilters"></a>

```csharp
public string[] LocationFilters { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParallelDeployments`<sup>Required</sup> <a name="ParallelDeployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeployments"></a>

```csharp
public double ParallelDeployments { get; }
```

- *Type:* double

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; }
```

- *Type:* string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionId"></a>

```csharp
public string PolicyDefinitionId { get; }
```

- *Type:* string

---

##### `PolicyDefinitionReferenceId`<sup>Required</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceId"></a>

```csharp
public string PolicyDefinitionReferenceId { get; }
```

- *Type:* string

---

##### `ResourceCount`<sup>Required</sup> <a name="ResourceCount" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCount"></a>

```csharp
public double ResourceCount { get; }
```

- *Type:* double

---

##### `ResourceDiscoveryMode`<sup>Required</sup> <a name="ResourceDiscoveryMode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryMode"></a>

```csharp
public string ResourceDiscoveryMode { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupPolicyRemediationConfig <a name="ResourceGroupPolicyRemediationConfig" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupPolicyRemediationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PolicyAssignmentId,
    string ResourceGroupId,
    double FailurePercentage = null,
    string Id = null,
    string[] LocationFilters = null,
    double ParallelDeployments = null,
    string PolicyDefinitionId = null,
    string PolicyDefinitionReferenceId = null,
    double ResourceCount = null,
    string ResourceDiscoveryMode = null,
    ResourceGroupPolicyRemediationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.locationFilters">LocationFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.parallelDeployments">ParallelDeployments</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#policy_definition_id ResourceGroupPolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceCount">ResourceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceDiscoveryMode">ResourceDiscoveryMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}.

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}.

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}.

---

##### `FailurePercentage`<sup>Optional</sup> <a name="FailurePercentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationFilters`<sup>Optional</sup> <a name="LocationFilters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.locationFilters"></a>

```csharp
public string[] LocationFilters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}.

---

##### `ParallelDeployments`<sup>Optional</sup> <a name="ParallelDeployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.parallelDeployments"></a>

```csharp
public double ParallelDeployments { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}.

---

##### `PolicyDefinitionId`<sup>Optional</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionId"></a>

```csharp
public string PolicyDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#policy_definition_id ResourceGroupPolicyRemediation#policy_definition_id}.

---

##### `PolicyDefinitionReferenceId`<sup>Optional</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```csharp
public string PolicyDefinitionReferenceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}.

---

##### `ResourceCount`<sup>Optional</sup> <a name="ResourceCount" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceCount"></a>

```csharp
public double ResourceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}.

---

##### `ResourceDiscoveryMode`<sup>Optional</sup> <a name="ResourceDiscoveryMode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```csharp
public string ResourceDiscoveryMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.timeouts"></a>

```csharp
public ResourceGroupPolicyRemediationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#timeouts ResourceGroupPolicyRemediation#timeouts}

---

### ResourceGroupPolicyRemediationTimeouts <a name="ResourceGroupPolicyRemediationTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupPolicyRemediationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#create ResourceGroupPolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#delete ResourceGroupPolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#read ResourceGroupPolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#update ResourceGroupPolicyRemediation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#create ResourceGroupPolicyRemediation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#delete ResourceGroupPolicyRemediation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#read ResourceGroupPolicyRemediation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/resource_group_policy_remediation#update ResourceGroupPolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupPolicyRemediationTimeoutsOutputReference <a name="ResourceGroupPolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupPolicyRemediationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



