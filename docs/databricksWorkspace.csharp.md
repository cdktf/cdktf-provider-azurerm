# `azurerm_databricks_workspace`

Refer to the Terraform Registory for docs: [`azurerm_databricks_workspace`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace).

# `databricksWorkspace` Submodule <a name="`databricksWorkspace` Submodule" id="@cdktf/provider-azurerm.databricksWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksWorkspace <a name="DatabricksWorkspace" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace azurerm_databricks_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspace(Construct Scope, string Id, DatabricksWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig">DatabricksWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig">DatabricksWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters">PutCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomerManagedKeyEnabled">ResetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomParameters">ResetCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetInfrastructureEncryptionEnabled">ResetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetLoadBalancerBackendAddressPoolId">ResetLoadBalancerBackendAddressPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultKeyId">ResetManagedDiskCmkKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkRotationToLatestVersionEnabled">ResetManagedDiskCmkRotationToLatestVersionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultKeyId">ResetManagedServicesCmkKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetNetworkSecurityGroupRulesRequired">ResetNetworkSecurityGroupRulesRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCustomParameters` <a name="PutCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters"></a>

```csharp
private void PutCustomParameters(DatabricksWorkspaceCustomParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabricksWorkspaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

---

##### `ResetCustomerManagedKeyEnabled` <a name="ResetCustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomerManagedKeyEnabled"></a>

```csharp
private void ResetCustomerManagedKeyEnabled()
```

##### `ResetCustomParameters` <a name="ResetCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomParameters"></a>

```csharp
private void ResetCustomParameters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInfrastructureEncryptionEnabled` <a name="ResetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetInfrastructureEncryptionEnabled"></a>

```csharp
private void ResetInfrastructureEncryptionEnabled()
```

##### `ResetLoadBalancerBackendAddressPoolId` <a name="ResetLoadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetLoadBalancerBackendAddressPoolId"></a>

```csharp
private void ResetLoadBalancerBackendAddressPoolId()
```

##### `ResetManagedDiskCmkKeyVaultKeyId` <a name="ResetManagedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultKeyId"></a>

```csharp
private void ResetManagedDiskCmkKeyVaultKeyId()
```

##### `ResetManagedDiskCmkRotationToLatestVersionEnabled` <a name="ResetManagedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkRotationToLatestVersionEnabled"></a>

```csharp
private void ResetManagedDiskCmkRotationToLatestVersionEnabled()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedResourceGroupName"></a>

```csharp
private void ResetManagedResourceGroupName()
```

##### `ResetManagedServicesCmkKeyVaultKeyId` <a name="ResetManagedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultKeyId"></a>

```csharp
private void ResetManagedServicesCmkKeyVaultKeyId()
```

##### `ResetNetworkSecurityGroupRulesRequired` <a name="ResetNetworkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetNetworkSecurityGroupRulesRequired"></a>

```csharp
private void ResetNetworkSecurityGroupRulesRequired()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParameters">CustomParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference">DatabricksWorkspaceCustomParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskIdentity">ManagedDiskIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList">DatabricksWorkspaceManagedDiskIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupId">ManagedResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.storageAccountIdentity">StorageAccountIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList">DatabricksWorkspaceStorageAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference">DatabricksWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabledInput">CustomerManagedKeyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParametersInput">CustomParametersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabledInput">InfrastructureEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolIdInput">LoadBalancerBackendAddressPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyIdInput">ManagedDiskCmkKeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabledInput">ManagedDiskCmkRotationToLatestVersionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyIdInput">ManagedServicesCmkKeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequiredInput">NetworkSecurityGroupRulesRequiredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolId">LoadBalancerBackendAddressPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyId">ManagedDiskCmkKeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabled">ManagedDiskCmkRotationToLatestVersionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyId">ManagedServicesCmkKeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequired">NetworkSecurityGroupRulesRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomParameters`<sup>Required</sup> <a name="CustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParameters"></a>

```csharp
public DatabricksWorkspaceCustomParametersOutputReference CustomParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference">DatabricksWorkspaceCustomParametersOutputReference</a>

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `ManagedDiskIdentity`<sup>Required</sup> <a name="ManagedDiskIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskIdentity"></a>

```csharp
public DatabricksWorkspaceManagedDiskIdentityList ManagedDiskIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList">DatabricksWorkspaceManagedDiskIdentityList</a>

---

##### `ManagedResourceGroupId`<sup>Required</sup> <a name="ManagedResourceGroupId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupId"></a>

```csharp
public string ManagedResourceGroupId { get; }
```

- *Type:* string

---

##### `StorageAccountIdentity`<sup>Required</sup> <a name="StorageAccountIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.storageAccountIdentity"></a>

```csharp
public DatabricksWorkspaceStorageAccountIdentityList StorageAccountIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList">DatabricksWorkspaceStorageAccountIdentityList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeouts"></a>

```csharp
public DatabricksWorkspaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference">DatabricksWorkspaceTimeoutsOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabledInput"></a>

```csharp
public object CustomerManagedKeyEnabledInput { get; }
```

- *Type:* object

---

##### `CustomParametersInput`<sup>Optional</sup> <a name="CustomParametersInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParametersInput"></a>

```csharp
public DatabricksWorkspaceCustomParameters CustomParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabledInput"></a>

```csharp
public object InfrastructureEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `LoadBalancerBackendAddressPoolIdInput`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolIdInput"></a>

```csharp
public string LoadBalancerBackendAddressPoolIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedDiskCmkKeyVaultKeyIdInput`<sup>Optional</sup> <a name="ManagedDiskCmkKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyIdInput"></a>

```csharp
public string ManagedDiskCmkKeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `ManagedDiskCmkRotationToLatestVersionEnabledInput`<sup>Optional</sup> <a name="ManagedDiskCmkRotationToLatestVersionEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabledInput"></a>

```csharp
public object ManagedDiskCmkRotationToLatestVersionEnabledInput { get; }
```

- *Type:* object

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupNameInput"></a>

```csharp
public string ManagedResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ManagedServicesCmkKeyVaultKeyIdInput`<sup>Optional</sup> <a name="ManagedServicesCmkKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyIdInput"></a>

```csharp
public string ManagedServicesCmkKeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupRulesRequiredInput`<sup>Optional</sup> <a name="NetworkSecurityGroupRulesRequiredInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequiredInput"></a>

```csharp
public string NetworkSecurityGroupRulesRequiredInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabled"></a>

```csharp
public object CustomerManagedKeyEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabled"></a>

```csharp
public object InfrastructureEncryptionEnabled { get; }
```

- *Type:* object

---

##### `LoadBalancerBackendAddressPoolId`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolId"></a>

```csharp
public string LoadBalancerBackendAddressPoolId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedDiskCmkKeyVaultKeyId`<sup>Required</sup> <a name="ManagedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyId"></a>

```csharp
public string ManagedDiskCmkKeyVaultKeyId { get; }
```

- *Type:* string

---

##### `ManagedDiskCmkRotationToLatestVersionEnabled`<sup>Required</sup> <a name="ManagedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabled"></a>

```csharp
public object ManagedDiskCmkRotationToLatestVersionEnabled { get; }
```

- *Type:* object

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; }
```

- *Type:* string

---

##### `ManagedServicesCmkKeyVaultKeyId`<sup>Required</sup> <a name="ManagedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyId"></a>

```csharp
public string ManagedServicesCmkKeyVaultKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupRulesRequired`<sup>Required</sup> <a name="NetworkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequired"></a>

```csharp
public string NetworkSecurityGroupRulesRequired { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksWorkspaceConfig <a name="DatabricksWorkspaceConfig" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string Sku,
    object CustomerManagedKeyEnabled = null,
    DatabricksWorkspaceCustomParameters CustomParameters = null,
    string Id = null,
    object InfrastructureEncryptionEnabled = null,
    string LoadBalancerBackendAddressPoolId = null,
    string ManagedDiskCmkKeyVaultKeyId = null,
    object ManagedDiskCmkRotationToLatestVersionEnabled = null,
    string ManagedResourceGroupName = null,
    string ManagedServicesCmkKeyVaultKeyId = null,
    string NetworkSecurityGroupRulesRequired = null,
    object PublicNetworkAccessEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DatabricksWorkspaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customParameters">CustomParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | custom_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.loadBalancerBackendAddressPoolId">LoadBalancerBackendAddressPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultKeyId">ManagedDiskCmkKeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkRotationToLatestVersionEnabled">ManagedDiskCmkRotationToLatestVersionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultKeyId">ManagedServicesCmkKeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.networkSecurityGroupRulesRequired">NetworkSecurityGroupRulesRequired</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}.

---

##### `CustomerManagedKeyEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customerManagedKeyEnabled"></a>

```csharp
public object CustomerManagedKeyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}.

---

##### `CustomParameters`<sup>Optional</sup> <a name="CustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customParameters"></a>

```csharp
public DatabricksWorkspaceCustomParameters CustomParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

custom_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#custom_parameters DatabricksWorkspace#custom_parameters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InfrastructureEncryptionEnabled`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.infrastructureEncryptionEnabled"></a>

```csharp
public object InfrastructureEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}.

---

##### `LoadBalancerBackendAddressPoolId`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.loadBalancerBackendAddressPoolId"></a>

```csharp
public string LoadBalancerBackendAddressPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}.

---

##### `ManagedDiskCmkKeyVaultKeyId`<sup>Optional</sup> <a name="ManagedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultKeyId"></a>

```csharp
public string ManagedDiskCmkKeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}.

---

##### `ManagedDiskCmkRotationToLatestVersionEnabled`<sup>Optional</sup> <a name="ManagedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkRotationToLatestVersionEnabled"></a>

```csharp
public object ManagedDiskCmkRotationToLatestVersionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}.

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}.

---

##### `ManagedServicesCmkKeyVaultKeyId`<sup>Optional</sup> <a name="ManagedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultKeyId"></a>

```csharp
public string ManagedServicesCmkKeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}.

---

##### `NetworkSecurityGroupRulesRequired`<sup>Optional</sup> <a name="NetworkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.networkSecurityGroupRulesRequired"></a>

```csharp
public string NetworkSecurityGroupRulesRequired { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.timeouts"></a>

```csharp
public DatabricksWorkspaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#timeouts DatabricksWorkspace#timeouts}

---

### DatabricksWorkspaceCustomParameters <a name="DatabricksWorkspaceCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceCustomParameters {
    string MachineLearningWorkspaceId = null,
    string NatGatewayName = null,
    object NoPublicIp = null,
    string PrivateSubnetName = null,
    string PrivateSubnetNetworkSecurityGroupAssociationId = null,
    string PublicIpName = null,
    string PublicSubnetName = null,
    string PublicSubnetNetworkSecurityGroupAssociationId = null,
    string StorageAccountName = null,
    string StorageAccountSkuName = null,
    string VirtualNetworkId = null,
    string VnetAddressPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.natGatewayName">NatGatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.noPublicIp">NoPublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetName">PrivateSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetNetworkSecurityGroupAssociationId">PrivateSubnetNetworkSecurityGroupAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicIpName">PublicIpName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetName">PublicSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetNetworkSecurityGroupAssociationId">PublicSubnetNetworkSecurityGroupAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountSkuName">StorageAccountSkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.vnetAddressPrefix">VnetAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}. |

---

##### `MachineLearningWorkspaceId`<sup>Optional</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.machineLearningWorkspaceId"></a>

```csharp
public string MachineLearningWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}.

---

##### `NatGatewayName`<sup>Optional</sup> <a name="NatGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.natGatewayName"></a>

```csharp
public string NatGatewayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}.

---

##### `NoPublicIp`<sup>Optional</sup> <a name="NoPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.noPublicIp"></a>

```csharp
public object NoPublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}.

---

##### `PrivateSubnetName`<sup>Optional</sup> <a name="PrivateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetName"></a>

```csharp
public string PrivateSubnetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}.

---

##### `PrivateSubnetNetworkSecurityGroupAssociationId`<sup>Optional</sup> <a name="PrivateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetNetworkSecurityGroupAssociationId"></a>

```csharp
public string PrivateSubnetNetworkSecurityGroupAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}.

---

##### `PublicIpName`<sup>Optional</sup> <a name="PublicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicIpName"></a>

```csharp
public string PublicIpName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}.

---

##### `PublicSubnetName`<sup>Optional</sup> <a name="PublicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetName"></a>

```csharp
public string PublicSubnetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}.

---

##### `PublicSubnetNetworkSecurityGroupAssociationId`<sup>Optional</sup> <a name="PublicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetNetworkSecurityGroupAssociationId"></a>

```csharp
public string PublicSubnetNetworkSecurityGroupAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}.

---

##### `StorageAccountName`<sup>Optional</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}.

---

##### `StorageAccountSkuName`<sup>Optional</sup> <a name="StorageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountSkuName"></a>

```csharp
public string StorageAccountSkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}.

---

##### `VnetAddressPrefix`<sup>Optional</sup> <a name="VnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.vnetAddressPrefix"></a>

```csharp
public string VnetAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}.

---

### DatabricksWorkspaceManagedDiskIdentity <a name="DatabricksWorkspaceManagedDiskIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceManagedDiskIdentity {

};
```


### DatabricksWorkspaceStorageAccountIdentity <a name="DatabricksWorkspaceStorageAccountIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceStorageAccountIdentity {

};
```


### DatabricksWorkspaceTimeouts <a name="DatabricksWorkspaceTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksWorkspaceCustomParametersOutputReference <a name="DatabricksWorkspaceCustomParametersOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceCustomParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetMachineLearningWorkspaceId">ResetMachineLearningWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNatGatewayName">ResetNatGatewayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNoPublicIp">ResetNoPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetName">ResetPrivateSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetNetworkSecurityGroupAssociationId">ResetPrivateSubnetNetworkSecurityGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicIpName">ResetPublicIpName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetName">ResetPublicSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetNetworkSecurityGroupAssociationId">ResetPublicSubnetNetworkSecurityGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountName">ResetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountSkuName">ResetStorageAccountSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVnetAddressPrefix">ResetVnetAddressPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMachineLearningWorkspaceId` <a name="ResetMachineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetMachineLearningWorkspaceId"></a>

```csharp
private void ResetMachineLearningWorkspaceId()
```

##### `ResetNatGatewayName` <a name="ResetNatGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNatGatewayName"></a>

```csharp
private void ResetNatGatewayName()
```

##### `ResetNoPublicIp` <a name="ResetNoPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNoPublicIp"></a>

```csharp
private void ResetNoPublicIp()
```

##### `ResetPrivateSubnetName` <a name="ResetPrivateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetName"></a>

```csharp
private void ResetPrivateSubnetName()
```

##### `ResetPrivateSubnetNetworkSecurityGroupAssociationId` <a name="ResetPrivateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetNetworkSecurityGroupAssociationId"></a>

```csharp
private void ResetPrivateSubnetNetworkSecurityGroupAssociationId()
```

##### `ResetPublicIpName` <a name="ResetPublicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicIpName"></a>

```csharp
private void ResetPublicIpName()
```

##### `ResetPublicSubnetName` <a name="ResetPublicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetName"></a>

```csharp
private void ResetPublicSubnetName()
```

##### `ResetPublicSubnetNetworkSecurityGroupAssociationId` <a name="ResetPublicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetNetworkSecurityGroupAssociationId"></a>

```csharp
private void ResetPublicSubnetNetworkSecurityGroupAssociationId()
```

##### `ResetStorageAccountName` <a name="ResetStorageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountName"></a>

```csharp
private void ResetStorageAccountName()
```

##### `ResetStorageAccountSkuName` <a name="ResetStorageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountSkuName"></a>

```csharp
private void ResetStorageAccountSkuName()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```

##### `ResetVnetAddressPrefix` <a name="ResetVnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVnetAddressPrefix"></a>

```csharp
private void ResetVnetAddressPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceIdInput">MachineLearningWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayNameInput">NatGatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIpInput">NoPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNameInput">PrivateSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationIdInput">PrivateSubnetNetworkSecurityGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpNameInput">PublicIpNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNameInput">PublicSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationIdInput">PublicSubnetNetworkSecurityGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuNameInput">StorageAccountSkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefixInput">VnetAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayName">NatGatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIp">NoPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetName">PrivateSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationId">PrivateSubnetNetworkSecurityGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpName">PublicIpName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetName">PublicSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationId">PublicSubnetNetworkSecurityGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuName">StorageAccountSkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefix">VnetAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MachineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="MachineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceIdInput"></a>

```csharp
public string MachineLearningWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NatGatewayNameInput`<sup>Optional</sup> <a name="NatGatewayNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayNameInput"></a>

```csharp
public string NatGatewayNameInput { get; }
```

- *Type:* string

---

##### `NoPublicIpInput`<sup>Optional</sup> <a name="NoPublicIpInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIpInput"></a>

```csharp
public object NoPublicIpInput { get; }
```

- *Type:* object

---

##### `PrivateSubnetNameInput`<sup>Optional</sup> <a name="PrivateSubnetNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNameInput"></a>

```csharp
public string PrivateSubnetNameInput { get; }
```

- *Type:* string

---

##### `PrivateSubnetNetworkSecurityGroupAssociationIdInput`<sup>Optional</sup> <a name="PrivateSubnetNetworkSecurityGroupAssociationIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationIdInput"></a>

```csharp
public string PrivateSubnetNetworkSecurityGroupAssociationIdInput { get; }
```

- *Type:* string

---

##### `PublicIpNameInput`<sup>Optional</sup> <a name="PublicIpNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpNameInput"></a>

```csharp
public string PublicIpNameInput { get; }
```

- *Type:* string

---

##### `PublicSubnetNameInput`<sup>Optional</sup> <a name="PublicSubnetNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNameInput"></a>

```csharp
public string PublicSubnetNameInput { get; }
```

- *Type:* string

---

##### `PublicSubnetNetworkSecurityGroupAssociationIdInput`<sup>Optional</sup> <a name="PublicSubnetNetworkSecurityGroupAssociationIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationIdInput"></a>

```csharp
public string PublicSubnetNetworkSecurityGroupAssociationIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountSkuNameInput`<sup>Optional</sup> <a name="StorageAccountSkuNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuNameInput"></a>

```csharp
public string StorageAccountSkuNameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VnetAddressPrefixInput`<sup>Optional</sup> <a name="VnetAddressPrefixInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefixInput"></a>

```csharp
public string VnetAddressPrefixInput { get; }
```

- *Type:* string

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceId"></a>

```csharp
public string MachineLearningWorkspaceId { get; }
```

- *Type:* string

---

##### `NatGatewayName`<sup>Required</sup> <a name="NatGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayName"></a>

```csharp
public string NatGatewayName { get; }
```

- *Type:* string

---

##### `NoPublicIp`<sup>Required</sup> <a name="NoPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIp"></a>

```csharp
public object NoPublicIp { get; }
```

- *Type:* object

---

##### `PrivateSubnetName`<sup>Required</sup> <a name="PrivateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetName"></a>

```csharp
public string PrivateSubnetName { get; }
```

- *Type:* string

---

##### `PrivateSubnetNetworkSecurityGroupAssociationId`<sup>Required</sup> <a name="PrivateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationId"></a>

```csharp
public string PrivateSubnetNetworkSecurityGroupAssociationId { get; }
```

- *Type:* string

---

##### `PublicIpName`<sup>Required</sup> <a name="PublicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpName"></a>

```csharp
public string PublicIpName { get; }
```

- *Type:* string

---

##### `PublicSubnetName`<sup>Required</sup> <a name="PublicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetName"></a>

```csharp
public string PublicSubnetName { get; }
```

- *Type:* string

---

##### `PublicSubnetNetworkSecurityGroupAssociationId`<sup>Required</sup> <a name="PublicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationId"></a>

```csharp
public string PublicSubnetNetworkSecurityGroupAssociationId { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `StorageAccountSkuName`<sup>Required</sup> <a name="StorageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuName"></a>

```csharp
public string StorageAccountSkuName { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VnetAddressPrefix`<sup>Required</sup> <a name="VnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefix"></a>

```csharp
public string VnetAddressPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.internalValue"></a>

```csharp
public DatabricksWorkspaceCustomParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---


### DatabricksWorkspaceManagedDiskIdentityList <a name="DatabricksWorkspaceManagedDiskIdentityList" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceManagedDiskIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get"></a>

```csharp
private DatabricksWorkspaceManagedDiskIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabricksWorkspaceManagedDiskIdentityOutputReference <a name="DatabricksWorkspaceManagedDiskIdentityOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceManagedDiskIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity">DatabricksWorkspaceManagedDiskIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.internalValue"></a>

```csharp
public DatabricksWorkspaceManagedDiskIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity">DatabricksWorkspaceManagedDiskIdentity</a>

---


### DatabricksWorkspaceStorageAccountIdentityList <a name="DatabricksWorkspaceStorageAccountIdentityList" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceStorageAccountIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get"></a>

```csharp
private DatabricksWorkspaceStorageAccountIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabricksWorkspaceStorageAccountIdentityOutputReference <a name="DatabricksWorkspaceStorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceStorageAccountIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity">DatabricksWorkspaceStorageAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.internalValue"></a>

```csharp
public DatabricksWorkspaceStorageAccountIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity">DatabricksWorkspaceStorageAccountIdentity</a>

---


### DatabricksWorkspaceTimeoutsOutputReference <a name="DatabricksWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



