# `managementGroupPolicyAssignment` Submodule <a name="`managementGroupPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicyAssignment <a name="ManagementGroupPolicyAssignment" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment azurerm_management_group_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignment(Construct Scope, string Id, ManagementGroupPolicyAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig">ManagementGroupPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig">ManagementGroupPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage">PutNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetEnforce">ResetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNonComplianceMessage">ResetNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNotScopes">ResetNotScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity"></a>

```csharp
private void PutIdentity(ManagementGroupPolicyAssignmentIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

---

##### `PutNonComplianceMessage` <a name="PutNonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage"></a>

```csharp
private void PutNonComplianceMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagementGroupPolicyAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetEnforce"></a>

```csharp
private void ResetEnforce()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNonComplianceMessage` <a name="ResetNonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNonComplianceMessage"></a>

```csharp
private void ResetNonComplianceMessage()
```

##### `ResetNotScopes` <a name="ResetNotScopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNotScopes"></a>

```csharp
private void ResetNotScopes()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupPolicyAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupPolicyAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupPolicyAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference">ManagementGroupPolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessage">NonComplianceMessage</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList">ManagementGroupPolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference">ManagementGroupPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforceInput">EnforceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessageInput">NonComplianceMessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopesInput">NotScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionIdInput">PolicyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforce">Enforce</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopes">NotScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identity"></a>

```csharp
public ManagementGroupPolicyAssignmentIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference">ManagementGroupPolicyAssignmentIdentityOutputReference</a>

---

##### `NonComplianceMessage`<sup>Required</sup> <a name="NonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessage"></a>

```csharp
public ManagementGroupPolicyAssignmentNonComplianceMessageList NonComplianceMessage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList">ManagementGroupPolicyAssignmentNonComplianceMessageList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeouts"></a>

```csharp
public ManagementGroupPolicyAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference">ManagementGroupPolicyAssignmentTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforceInput"></a>

```csharp
public object EnforceInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identityInput"></a>

```csharp
public ManagementGroupPolicyAssignmentIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupIdInput"></a>

```csharp
public string ManagementGroupIdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NonComplianceMessageInput`<sup>Optional</sup> <a name="NonComplianceMessageInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessageInput"></a>

```csharp
public object NonComplianceMessageInput { get; }
```

- *Type:* object

---

##### `NotScopesInput`<sup>Optional</sup> <a name="NotScopesInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopesInput"></a>

```csharp
public string[] NotScopesInput { get; }
```

- *Type:* string[]

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionIdInput`<sup>Optional</sup> <a name="PolicyDefinitionIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionIdInput"></a>

```csharp
public string PolicyDefinitionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforce"></a>

```csharp
public object Enforce { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotScopes`<sup>Required</sup> <a name="NotScopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopes"></a>

```csharp
public string[] NotScopes { get; }
```

- *Type:* string[]

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionId"></a>

```csharp
public string PolicyDefinitionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicyAssignmentConfig <a name="ManagementGroupPolicyAssignmentConfig" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignmentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagementGroupId,
    string Name,
    string PolicyDefinitionId,
    string Description = null,
    string DisplayName = null,
    object Enforce = null,
    string Id = null,
    ManagementGroupPolicyAssignmentIdentity Identity = null,
    string Location = null,
    string Metadata = null,
    object NonComplianceMessage = null,
    string[] NotScopes = null,
    string Parameters = null,
    ManagementGroupPolicyAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#management_group_id ManagementGroupPolicyAssignment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#description ManagementGroupPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#display_name ManagementGroupPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.enforce">Enforce</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#enforce ManagementGroupPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#id ManagementGroupPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#location ManagementGroupPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.metadata">Metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#metadata ManagementGroupPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.nonComplianceMessage">NonComplianceMessage</a></code> | <code>object</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.notScopes">NotScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#not_scopes ManagementGroupPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#parameters ManagementGroupPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#management_group_id ManagementGroupPolicyAssignment#management_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}.

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.policyDefinitionId"></a>

```csharp
public string PolicyDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#description ManagementGroupPolicyAssignment#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#display_name ManagementGroupPolicyAssignment#display_name}.

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.enforce"></a>

```csharp
public object Enforce { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#enforce ManagementGroupPolicyAssignment#enforce}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#id ManagementGroupPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.identity"></a>

```csharp
public ManagementGroupPolicyAssignmentIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#identity ManagementGroupPolicyAssignment#identity}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#location ManagementGroupPolicyAssignment#location}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#metadata ManagementGroupPolicyAssignment#metadata}.

---

##### `NonComplianceMessage`<sup>Optional</sup> <a name="NonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.nonComplianceMessage"></a>

```csharp
public object NonComplianceMessage { get; set; }
```

- *Type:* object

non_compliance_message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#non_compliance_message ManagementGroupPolicyAssignment#non_compliance_message}

---

##### `NotScopes`<sup>Optional</sup> <a name="NotScopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.notScopes"></a>

```csharp
public string[] NotScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#not_scopes ManagementGroupPolicyAssignment#not_scopes}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#parameters ManagementGroupPolicyAssignment#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.timeouts"></a>

```csharp
public ManagementGroupPolicyAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#timeouts ManagementGroupPolicyAssignment#timeouts}

---

### ManagementGroupPolicyAssignmentIdentity <a name="ManagementGroupPolicyAssignmentIdentity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignmentIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#type ManagementGroupPolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#identity_ids ManagementGroupPolicyAssignment#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#type ManagementGroupPolicyAssignment#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#identity_ids ManagementGroupPolicyAssignment#identity_ids}.

---

### ManagementGroupPolicyAssignmentNonComplianceMessage <a name="ManagementGroupPolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignmentNonComplianceMessage {
    string Content,
    string PolicyDefinitionReferenceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#content ManagementGroupPolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#policy_definition_reference_id ManagementGroupPolicyAssignment#policy_definition_reference_id}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#content ManagementGroupPolicyAssignment#content}.

---

##### `PolicyDefinitionReferenceId`<sup>Optional</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```csharp
public string PolicyDefinitionReferenceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#policy_definition_reference_id ManagementGroupPolicyAssignment#policy_definition_reference_id}.

---

### ManagementGroupPolicyAssignmentTimeouts <a name="ManagementGroupPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#create ManagementGroupPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#delete ManagementGroupPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#read ManagementGroupPolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#update ManagementGroupPolicyAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#create ManagementGroupPolicyAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#delete ManagementGroupPolicyAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#read ManagementGroupPolicyAssignment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_policy_assignment#update ManagementGroupPolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicyAssignmentIdentityOutputReference <a name="ManagementGroupPolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignmentIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```csharp
public ManagementGroupPolicyAssignmentIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

---


### ManagementGroupPolicyAssignmentNonComplianceMessageList <a name="ManagementGroupPolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignmentNonComplianceMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get"></a>

```csharp
private ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference <a name="ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">ResetPolicyDefinitionReferenceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyDefinitionReferenceId` <a name="ResetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```csharp
private void ResetPolicyDefinitionReferenceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">PolicyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```csharp
public string PolicyDefinitionReferenceIdInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `PolicyDefinitionReferenceId`<sup>Required</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```csharp
public string PolicyDefinitionReferenceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagementGroupPolicyAssignmentTimeoutsOutputReference <a name="ManagementGroupPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



