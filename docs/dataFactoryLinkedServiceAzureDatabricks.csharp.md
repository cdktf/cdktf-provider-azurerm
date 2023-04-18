# `azurerm_data_factory_linked_service_azure_databricks`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_linked_service_azure_databricks`](https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks).

# `dataFactoryLinkedServiceAzureDatabricks` Submodule <a name="`dataFactoryLinkedServiceAzureDatabricks` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureDatabricks <a name="DataFactoryLinkedServiceAzureDatabricks" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks azurerm_data_factory_linked_service_azure_databricks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricks(Construct Scope, string Id, DataFactoryLinkedServiceAzureDatabricksConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig">DataFactoryLinkedServiceAzureDatabricksConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig">DataFactoryLinkedServiceAzureDatabricksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool">PutInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putKeyVaultPassword">PutKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig">PutNewClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetExistingClusterId">ResetExistingClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetInstancePool">ResetInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetKeyVaultPassword">ResetKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetMsiWorkSpaceResourceId">ResetMsiWorkSpaceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetNewClusterConfig">ResetNewClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInstancePool` <a name="PutInstancePool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool"></a>

```csharp
private void PutInstancePool(DataFactoryLinkedServiceAzureDatabricksInstancePool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a>

---

##### `PutKeyVaultPassword` <a name="PutKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putKeyVaultPassword"></a>

```csharp
private void PutKeyVaultPassword(DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putKeyVaultPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a>

---

##### `PutNewClusterConfig` <a name="PutNewClusterConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig"></a>

```csharp
private void PutNewClusterConfig(DataFactoryLinkedServiceAzureDatabricksNewClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryLinkedServiceAzureDatabricksTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a>

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExistingClusterId` <a name="ResetExistingClusterId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetExistingClusterId"></a>

```csharp
private void ResetExistingClusterId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstancePool` <a name="ResetInstancePool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetInstancePool"></a>

```csharp
private void ResetInstancePool()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetIntegrationRuntimeName"></a>

```csharp
private void ResetIntegrationRuntimeName()
```

##### `ResetKeyVaultPassword` <a name="ResetKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetKeyVaultPassword"></a>

```csharp
private void ResetKeyVaultPassword()
```

##### `ResetMsiWorkSpaceResourceId` <a name="ResetMsiWorkSpaceResourceId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetMsiWorkSpaceResourceId"></a>

```csharp
private void ResetMsiWorkSpaceResourceId()
```

##### `ResetNewClusterConfig` <a name="ResetNewClusterConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetNewClusterConfig"></a>

```csharp
private void ResetNewClusterConfig()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureDatabricks.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureDatabricks.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceAzureDatabricks.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.instancePool">InstancePool</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference">DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.newClusterConfig">NewClusterConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference">DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference">DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.adbDomainInput">AdbDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.existingClusterIdInput">ExistingClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.instancePoolInput">InstancePoolInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.keyVaultPasswordInput">KeyVaultPasswordInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.msiWorkSpaceResourceIdInput">MsiWorkSpaceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.newClusterConfigInput">NewClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.adbDomain">AdbDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.existingClusterId">ExistingClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.msiWorkSpaceResourceId">MsiWorkSpaceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InstancePool`<sup>Required</sup> <a name="InstancePool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.instancePool"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference InstancePool { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference">DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference</a>

---

##### `KeyVaultPassword`<sup>Required</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.keyVaultPassword"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference KeyVaultPassword { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference</a>

---

##### `NewClusterConfig`<sup>Required</sup> <a name="NewClusterConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.newClusterConfig"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference NewClusterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference">DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference">DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `AdbDomainInput`<sup>Optional</sup> <a name="AdbDomainInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.adbDomainInput"></a>

```csharp
public string AdbDomainInput { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExistingClusterIdInput`<sup>Optional</sup> <a name="ExistingClusterIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.existingClusterIdInput"></a>

```csharp
public string ExistingClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstancePoolInput`<sup>Optional</sup> <a name="InstancePoolInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.instancePoolInput"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksInstancePool InstancePoolInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a>

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.integrationRuntimeNameInput"></a>

```csharp
public string IntegrationRuntimeNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultPasswordInput`<sup>Optional</sup> <a name="KeyVaultPasswordInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.keyVaultPasswordInput"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword KeyVaultPasswordInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a>

---

##### `MsiWorkSpaceResourceIdInput`<sup>Optional</sup> <a name="MsiWorkSpaceResourceIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.msiWorkSpaceResourceIdInput"></a>

```csharp
public string MsiWorkSpaceResourceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NewClusterConfigInput`<sup>Optional</sup> <a name="NewClusterConfigInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.newClusterConfigInput"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksNewClusterConfig NewClusterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `AdbDomain`<sup>Required</sup> <a name="AdbDomain" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.adbDomain"></a>

```csharp
public string AdbDomain { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExistingClusterId`<sup>Required</sup> <a name="ExistingClusterId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.existingClusterId"></a>

```csharp
public string ExistingClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; }
```

- *Type:* string

---

##### `MsiWorkSpaceResourceId`<sup>Required</sup> <a name="MsiWorkSpaceResourceId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.msiWorkSpaceResourceId"></a>

```csharp
public string MsiWorkSpaceResourceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureDatabricksConfig <a name="DataFactoryLinkedServiceAzureDatabricksConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdbDomain,
    string DataFactoryId,
    string Name,
    string AccessToken = null,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    string Description = null,
    string ExistingClusterId = null,
    string Id = null,
    DataFactoryLinkedServiceAzureDatabricksInstancePool InstancePool = null,
    string IntegrationRuntimeName = null,
    DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword KeyVaultPassword = null,
    string MsiWorkSpaceResourceId = null,
    DataFactoryLinkedServiceAzureDatabricksNewClusterConfig NewClusterConfig = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    DataFactoryLinkedServiceAzureDatabricksTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.adbDomain">AdbDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#adb_domain DataFactoryLinkedServiceAzureDatabricks#adb_domain}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#data_factory_id DataFactoryLinkedServiceAzureDatabricks#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#name DataFactoryLinkedServiceAzureDatabricks#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#access_token DataFactoryLinkedServiceAzureDatabricks#access_token}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#additional_properties DataFactoryLinkedServiceAzureDatabricks#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#annotations DataFactoryLinkedServiceAzureDatabricks#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#description DataFactoryLinkedServiceAzureDatabricks#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.existingClusterId">ExistingClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#existing_cluster_id DataFactoryLinkedServiceAzureDatabricks#existing_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#id DataFactoryLinkedServiceAzureDatabricks#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.instancePool">InstancePool</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a></code> | instance_pool block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#integration_runtime_name DataFactoryLinkedServiceAzureDatabricks#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.msiWorkSpaceResourceId">MsiWorkSpaceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#msi_work_space_resource_id DataFactoryLinkedServiceAzureDatabricks#msi_work_space_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.newClusterConfig">NewClusterConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a></code> | new_cluster_config block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#parameters DataFactoryLinkedServiceAzureDatabricks#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdbDomain`<sup>Required</sup> <a name="AdbDomain" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.adbDomain"></a>

```csharp
public string AdbDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#adb_domain DataFactoryLinkedServiceAzureDatabricks#adb_domain}.

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#data_factory_id DataFactoryLinkedServiceAzureDatabricks#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#name DataFactoryLinkedServiceAzureDatabricks#name}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#access_token DataFactoryLinkedServiceAzureDatabricks#access_token}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#additional_properties DataFactoryLinkedServiceAzureDatabricks#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#annotations DataFactoryLinkedServiceAzureDatabricks#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#description DataFactoryLinkedServiceAzureDatabricks#description}.

---

##### `ExistingClusterId`<sup>Optional</sup> <a name="ExistingClusterId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.existingClusterId"></a>

```csharp
public string ExistingClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#existing_cluster_id DataFactoryLinkedServiceAzureDatabricks#existing_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#id DataFactoryLinkedServiceAzureDatabricks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstancePool`<sup>Optional</sup> <a name="InstancePool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.instancePool"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksInstancePool InstancePool { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a>

instance_pool block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#instance_pool DataFactoryLinkedServiceAzureDatabricks#instance_pool}

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#integration_runtime_name DataFactoryLinkedServiceAzureDatabricks#integration_runtime_name}.

---

##### `KeyVaultPassword`<sup>Optional</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.keyVaultPassword"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword KeyVaultPassword { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#key_vault_password DataFactoryLinkedServiceAzureDatabricks#key_vault_password}

---

##### `MsiWorkSpaceResourceId`<sup>Optional</sup> <a name="MsiWorkSpaceResourceId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.msiWorkSpaceResourceId"></a>

```csharp
public string MsiWorkSpaceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#msi_work_space_resource_id DataFactoryLinkedServiceAzureDatabricks#msi_work_space_resource_id}.

---

##### `NewClusterConfig`<sup>Optional</sup> <a name="NewClusterConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.newClusterConfig"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksNewClusterConfig NewClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a>

new_cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#new_cluster_config DataFactoryLinkedServiceAzureDatabricks#new_cluster_config}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#parameters DataFactoryLinkedServiceAzureDatabricks#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#timeouts DataFactoryLinkedServiceAzureDatabricks#timeouts}

---

### DataFactoryLinkedServiceAzureDatabricksInstancePool <a name="DataFactoryLinkedServiceAzureDatabricksInstancePool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksInstancePool {
    string ClusterVersion,
    string InstancePoolId,
    double MaxNumberOfWorkers = null,
    double MinNumberOfWorkers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#instance_pool_id DataFactoryLinkedServiceAzureDatabricks#instance_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.maxNumberOfWorkers">MaxNumberOfWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.minNumberOfWorkers">MinNumberOfWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}. |

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}.

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#instance_pool_id DataFactoryLinkedServiceAzureDatabricks#instance_pool_id}.

---

##### `MaxNumberOfWorkers`<sup>Optional</sup> <a name="MaxNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.maxNumberOfWorkers"></a>

```csharp
public double MaxNumberOfWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}.

---

##### `MinNumberOfWorkers`<sup>Optional</sup> <a name="MinNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.minNumberOfWorkers"></a>

```csharp
public double MinNumberOfWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}.

---

### DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword <a name="DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword {
    string LinkedServiceName,
    string SecretName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#linked_service_name DataFactoryLinkedServiceAzureDatabricks#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#secret_name DataFactoryLinkedServiceAzureDatabricks#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#linked_service_name DataFactoryLinkedServiceAzureDatabricks#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#secret_name DataFactoryLinkedServiceAzureDatabricks#secret_name}.

---

### DataFactoryLinkedServiceAzureDatabricksNewClusterConfig <a name="DataFactoryLinkedServiceAzureDatabricksNewClusterConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksNewClusterConfig {
    string ClusterVersion,
    string NodeType,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    string DriverNodeType = null,
    string[] InitScripts = null,
    string LogDestination = null,
    double MaxNumberOfWorkers = null,
    double MinNumberOfWorkers = null,
    System.Collections.Generic.IDictionary<string, string> SparkConfig = null,
    System.Collections.Generic.IDictionary<string, string> SparkEnvironmentVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#node_type DataFactoryLinkedServiceAzureDatabricks#node_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#custom_tags DataFactoryLinkedServiceAzureDatabricks#custom_tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.driverNodeType">DriverNodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#driver_node_type DataFactoryLinkedServiceAzureDatabricks#driver_node_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.initScripts">InitScripts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#init_scripts DataFactoryLinkedServiceAzureDatabricks#init_scripts}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.logDestination">LogDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#log_destination DataFactoryLinkedServiceAzureDatabricks#log_destination}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.maxNumberOfWorkers">MaxNumberOfWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.minNumberOfWorkers">MinNumberOfWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.sparkConfig">SparkConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#spark_config DataFactoryLinkedServiceAzureDatabricks#spark_config}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.sparkEnvironmentVariables">SparkEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#spark_environment_variables DataFactoryLinkedServiceAzureDatabricks#spark_environment_variables}. |

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}.

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#node_type DataFactoryLinkedServiceAzureDatabricks#node_type}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#custom_tags DataFactoryLinkedServiceAzureDatabricks#custom_tags}.

---

##### `DriverNodeType`<sup>Optional</sup> <a name="DriverNodeType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.driverNodeType"></a>

```csharp
public string DriverNodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#driver_node_type DataFactoryLinkedServiceAzureDatabricks#driver_node_type}.

---

##### `InitScripts`<sup>Optional</sup> <a name="InitScripts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.initScripts"></a>

```csharp
public string[] InitScripts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#init_scripts DataFactoryLinkedServiceAzureDatabricks#init_scripts}.

---

##### `LogDestination`<sup>Optional</sup> <a name="LogDestination" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.logDestination"></a>

```csharp
public string LogDestination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#log_destination DataFactoryLinkedServiceAzureDatabricks#log_destination}.

---

##### `MaxNumberOfWorkers`<sup>Optional</sup> <a name="MaxNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.maxNumberOfWorkers"></a>

```csharp
public double MaxNumberOfWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}.

---

##### `MinNumberOfWorkers`<sup>Optional</sup> <a name="MinNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.minNumberOfWorkers"></a>

```csharp
public double MinNumberOfWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}.

---

##### `SparkConfig`<sup>Optional</sup> <a name="SparkConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.sparkConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#spark_config DataFactoryLinkedServiceAzureDatabricks#spark_config}.

---

##### `SparkEnvironmentVariables`<sup>Optional</sup> <a name="SparkEnvironmentVariables" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.sparkEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#spark_environment_variables DataFactoryLinkedServiceAzureDatabricks#spark_environment_variables}.

---

### DataFactoryLinkedServiceAzureDatabricksTimeouts <a name="DataFactoryLinkedServiceAzureDatabricksTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#create DataFactoryLinkedServiceAzureDatabricks#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#delete DataFactoryLinkedServiceAzureDatabricks#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#read DataFactoryLinkedServiceAzureDatabricks#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#update DataFactoryLinkedServiceAzureDatabricks#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#create DataFactoryLinkedServiceAzureDatabricks#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#delete DataFactoryLinkedServiceAzureDatabricks#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#read DataFactoryLinkedServiceAzureDatabricks#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks#update DataFactoryLinkedServiceAzureDatabricks#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference <a name="DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resetMaxNumberOfWorkers">ResetMaxNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resetMinNumberOfWorkers">ResetMinNumberOfWorkers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNumberOfWorkers` <a name="ResetMaxNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resetMaxNumberOfWorkers"></a>

```csharp
private void ResetMaxNumberOfWorkers()
```

##### `ResetMinNumberOfWorkers` <a name="ResetMinNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resetMinNumberOfWorkers"></a>

```csharp
private void ResetMinNumberOfWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.maxNumberOfWorkersInput">MaxNumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.minNumberOfWorkersInput">MinNumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.maxNumberOfWorkers">MaxNumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.minNumberOfWorkers">MinNumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.instancePoolIdInput"></a>

```csharp
public string InstancePoolIdInput { get; }
```

- *Type:* string

---

##### `MaxNumberOfWorkersInput`<sup>Optional</sup> <a name="MaxNumberOfWorkersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.maxNumberOfWorkersInput"></a>

```csharp
public double MaxNumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `MinNumberOfWorkersInput`<sup>Optional</sup> <a name="MinNumberOfWorkersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.minNumberOfWorkersInput"></a>

```csharp
public double MinNumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; }
```

- *Type:* string

---

##### `MaxNumberOfWorkers`<sup>Required</sup> <a name="MaxNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.maxNumberOfWorkers"></a>

```csharp
public double MaxNumberOfWorkers { get; }
```

- *Type:* double

---

##### `MinNumberOfWorkers`<sup>Required</sup> <a name="MinNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.minNumberOfWorkers"></a>

```csharp
public double MinNumberOfWorkers { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.internalValue"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksInstancePool InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a>

---


### DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.internalValue"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a>

---


### DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference <a name="DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetDriverNodeType">ResetDriverNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetInitScripts">ResetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetLogDestination">ResetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetMaxNumberOfWorkers">ResetMaxNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetMinNumberOfWorkers">ResetMinNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetSparkConfig">ResetSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetSparkEnvironmentVariables">ResetSparkEnvironmentVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDriverNodeType` <a name="ResetDriverNodeType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetDriverNodeType"></a>

```csharp
private void ResetDriverNodeType()
```

##### `ResetInitScripts` <a name="ResetInitScripts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetInitScripts"></a>

```csharp
private void ResetInitScripts()
```

##### `ResetLogDestination` <a name="ResetLogDestination" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetLogDestination"></a>

```csharp
private void ResetLogDestination()
```

##### `ResetMaxNumberOfWorkers` <a name="ResetMaxNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetMaxNumberOfWorkers"></a>

```csharp
private void ResetMaxNumberOfWorkers()
```

##### `ResetMinNumberOfWorkers` <a name="ResetMinNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetMinNumberOfWorkers"></a>

```csharp
private void ResetMinNumberOfWorkers()
```

##### `ResetSparkConfig` <a name="ResetSparkConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetSparkConfig"></a>

```csharp
private void ResetSparkConfig()
```

##### `ResetSparkEnvironmentVariables` <a name="ResetSparkEnvironmentVariables" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetSparkEnvironmentVariables"></a>

```csharp
private void ResetSparkEnvironmentVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.driverNodeTypeInput">DriverNodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.initScriptsInput">InitScriptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.logDestinationInput">LogDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.maxNumberOfWorkersInput">MaxNumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.minNumberOfWorkersInput">MinNumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkConfigInput">SparkConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkEnvironmentVariablesInput">SparkEnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.driverNodeType">DriverNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.initScripts">InitScripts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.logDestination">LogDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.maxNumberOfWorkers">MaxNumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.minNumberOfWorkers">MinNumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkConfig">SparkConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkEnvironmentVariables">SparkEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverNodeTypeInput`<sup>Optional</sup> <a name="DriverNodeTypeInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.driverNodeTypeInput"></a>

```csharp
public string DriverNodeTypeInput { get; }
```

- *Type:* string

---

##### `InitScriptsInput`<sup>Optional</sup> <a name="InitScriptsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.initScriptsInput"></a>

```csharp
public string[] InitScriptsInput { get; }
```

- *Type:* string[]

---

##### `LogDestinationInput`<sup>Optional</sup> <a name="LogDestinationInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.logDestinationInput"></a>

```csharp
public string LogDestinationInput { get; }
```

- *Type:* string

---

##### `MaxNumberOfWorkersInput`<sup>Optional</sup> <a name="MaxNumberOfWorkersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.maxNumberOfWorkersInput"></a>

```csharp
public double MaxNumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `MinNumberOfWorkersInput`<sup>Optional</sup> <a name="MinNumberOfWorkersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.minNumberOfWorkersInput"></a>

```csharp
public double MinNumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `SparkConfigInput`<sup>Optional</sup> <a name="SparkConfigInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkEnvironmentVariablesInput`<sup>Optional</sup> <a name="SparkEnvironmentVariablesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkEnvironmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverNodeType`<sup>Required</sup> <a name="DriverNodeType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.driverNodeType"></a>

```csharp
public string DriverNodeType { get; }
```

- *Type:* string

---

##### `InitScripts`<sup>Required</sup> <a name="InitScripts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.initScripts"></a>

```csharp
public string[] InitScripts { get; }
```

- *Type:* string[]

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.logDestination"></a>

```csharp
public string LogDestination { get; }
```

- *Type:* string

---

##### `MaxNumberOfWorkers`<sup>Required</sup> <a name="MaxNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.maxNumberOfWorkers"></a>

```csharp
public double MaxNumberOfWorkers { get; }
```

- *Type:* double

---

##### `MinNumberOfWorkers`<sup>Required</sup> <a name="MinNumberOfWorkers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.minNumberOfWorkers"></a>

```csharp
public double MinNumberOfWorkers { get; }
```

- *Type:* double

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `SparkConfig`<sup>Required</sup> <a name="SparkConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkEnvironmentVariables`<sup>Required</sup> <a name="SparkEnvironmentVariables" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataFactoryLinkedServiceAzureDatabricksNewClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a>

---


### DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



