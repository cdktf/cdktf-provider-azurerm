# `azurerm_service_fabric_cluster`

Refer to the Terraform Registory for docs: [`azurerm_service_fabric_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster).

# `serviceFabricCluster` Submodule <a name="`serviceFabricCluster` Submodule" id="@cdktf/provider-azurerm.serviceFabricCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceFabricCluster <a name="ServiceFabricCluster" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster azurerm_service_fabric_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricCluster(Construct Scope, string Id, ServiceFabricClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig">ServiceFabricClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig">ServiceFabricClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory">PutAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames">PutCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName">PutClientCertificateCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint">PutClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig">PutDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings">PutFabricSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType">PutNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate">PutReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames">PutReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy">PutUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAddOnFeatures">ResetAddOnFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAzureActiveDirectory">ResetAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificateCommonNames">ResetCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateCommonName">ResetClientCertificateCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateThumbprint">ResetClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClusterCodeVersion">ResetClusterCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetDiagnosticsConfig">ResetDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetFabricSettings">ResetFabricSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificate">ResetReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificateCommonNames">ResetReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetServiceFabricZonalUpgradeMode">ResetServiceFabricZonalUpgradeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetUpgradePolicy">ResetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetVmssZonalUpgradeMode">ResetVmssZonalUpgradeMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAzureActiveDirectory` <a name="PutAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory"></a>

```csharp
private void PutAzureActiveDirectory(ServiceFabricClusterAzureActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate"></a>

```csharp
private void PutCertificate(ServiceFabricClusterCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---

##### `PutCertificateCommonNames` <a name="PutCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames"></a>

```csharp
private void PutCertificateCommonNames(ServiceFabricClusterCertificateCommonNames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---

##### `PutClientCertificateCommonName` <a name="PutClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName"></a>

```csharp
private void PutClientCertificateCommonName(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName.parameter.value"></a>

- *Type:* object

---

##### `PutClientCertificateThumbprint` <a name="PutClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint"></a>

```csharp
private void PutClientCertificateThumbprint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint.parameter.value"></a>

- *Type:* object

---

##### `PutDiagnosticsConfig` <a name="PutDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig"></a>

```csharp
private void PutDiagnosticsConfig(ServiceFabricClusterDiagnosticsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---

##### `PutFabricSettings` <a name="PutFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings"></a>

```csharp
private void PutFabricSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings.parameter.value"></a>

- *Type:* object

---

##### `PutNodeType` <a name="PutNodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType"></a>

```csharp
private void PutNodeType(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType.parameter.value"></a>

- *Type:* object

---

##### `PutReverseProxyCertificate` <a name="PutReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate"></a>

```csharp
private void PutReverseProxyCertificate(ServiceFabricClusterReverseProxyCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---

##### `PutReverseProxyCertificateCommonNames` <a name="PutReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames"></a>

```csharp
private void PutReverseProxyCertificateCommonNames(ServiceFabricClusterReverseProxyCertificateCommonNames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ServiceFabricClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

---

##### `PutUpgradePolicy` <a name="PutUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy"></a>

```csharp
private void PutUpgradePolicy(ServiceFabricClusterUpgradePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---

##### `ResetAddOnFeatures` <a name="ResetAddOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAddOnFeatures"></a>

```csharp
private void ResetAddOnFeatures()
```

##### `ResetAzureActiveDirectory` <a name="ResetAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAzureActiveDirectory"></a>

```csharp
private void ResetAzureActiveDirectory()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCertificateCommonNames` <a name="ResetCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificateCommonNames"></a>

```csharp
private void ResetCertificateCommonNames()
```

##### `ResetClientCertificateCommonName` <a name="ResetClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateCommonName"></a>

```csharp
private void ResetClientCertificateCommonName()
```

##### `ResetClientCertificateThumbprint` <a name="ResetClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateThumbprint"></a>

```csharp
private void ResetClientCertificateThumbprint()
```

##### `ResetClusterCodeVersion` <a name="ResetClusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClusterCodeVersion"></a>

```csharp
private void ResetClusterCodeVersion()
```

##### `ResetDiagnosticsConfig` <a name="ResetDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetDiagnosticsConfig"></a>

```csharp
private void ResetDiagnosticsConfig()
```

##### `ResetFabricSettings` <a name="ResetFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetFabricSettings"></a>

```csharp
private void ResetFabricSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReverseProxyCertificate` <a name="ResetReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificate"></a>

```csharp
private void ResetReverseProxyCertificate()
```

##### `ResetReverseProxyCertificateCommonNames` <a name="ResetReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificateCommonNames"></a>

```csharp
private void ResetReverseProxyCertificateCommonNames()
```

##### `ResetServiceFabricZonalUpgradeMode` <a name="ResetServiceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetServiceFabricZonalUpgradeMode"></a>

```csharp
private void ResetServiceFabricZonalUpgradeMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpgradePolicy` <a name="ResetUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetUpgradePolicy"></a>

```csharp
private void ResetUpgradePolicy()
```

##### `ResetVmssZonalUpgradeMode` <a name="ResetVmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetVmssZonalUpgradeMode"></a>

```csharp
private void ResetVmssZonalUpgradeMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServiceFabricCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServiceFabricCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServiceFabricCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectory">AzureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference">ServiceFabricClusterAzureActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference">ServiceFabricClusterCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNames">CertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference">ServiceFabricClusterCertificateCommonNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonName">ClientCertificateCommonName</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList">ServiceFabricClusterClientCertificateCommonNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprint">ClientCertificateThumbprint</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList">ServiceFabricClusterClientCertificateThumbprintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterEndpoint">ClusterEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfig">DiagnosticsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference">ServiceFabricClusterDiagnosticsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettings">FabricSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList">ServiceFabricClusterFabricSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeType">NodeType</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList">ServiceFabricClusterNodeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificate">ReverseProxyCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference">ServiceFabricClusterReverseProxyCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNames">ReverseProxyCertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference">ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference">ServiceFabricClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference">ServiceFabricClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeaturesInput">AddOnFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectoryInput">AzureActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNamesInput">CertificateCommonNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonNameInput">ClientCertificateCommonNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprintInput">ClientCertificateThumbprintInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersionInput">ClusterCodeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfigInput">DiagnosticsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettingsInput">FabricSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpointInput">ManagementEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevelInput">ReliabilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNamesInput">ReverseProxyCertificateCommonNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateInput">ReverseProxyCertificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeModeInput">ServiceFabricZonalUpgradeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeModeInput">UpgradeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicyInput">UpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImageInput">VmImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeModeInput">VmssZonalUpgradeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeatures">AddOnFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersion">ClusterCodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpoint">ManagementEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevel">ReliabilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeMode">ServiceFabricZonalUpgradeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeMode">UpgradeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImage">VmImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeMode">VmssZonalUpgradeMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AzureActiveDirectory`<sup>Required</sup> <a name="AzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectory"></a>

```csharp
public ServiceFabricClusterAzureActiveDirectoryOutputReference AzureActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference">ServiceFabricClusterAzureActiveDirectoryOutputReference</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificate"></a>

```csharp
public ServiceFabricClusterCertificateOutputReference Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference">ServiceFabricClusterCertificateOutputReference</a>

---

##### `CertificateCommonNames`<sup>Required</sup> <a name="CertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNames"></a>

```csharp
public ServiceFabricClusterCertificateCommonNamesOutputReference CertificateCommonNames { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference">ServiceFabricClusterCertificateCommonNamesOutputReference</a>

---

##### `ClientCertificateCommonName`<sup>Required</sup> <a name="ClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonName"></a>

```csharp
public ServiceFabricClusterClientCertificateCommonNameList ClientCertificateCommonName { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList">ServiceFabricClusterClientCertificateCommonNameList</a>

---

##### `ClientCertificateThumbprint`<sup>Required</sup> <a name="ClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprint"></a>

```csharp
public ServiceFabricClusterClientCertificateThumbprintList ClientCertificateThumbprint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList">ServiceFabricClusterClientCertificateThumbprintList</a>

---

##### `ClusterEndpoint`<sup>Required</sup> <a name="ClusterEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterEndpoint"></a>

```csharp
public string ClusterEndpoint { get; }
```

- *Type:* string

---

##### `DiagnosticsConfig`<sup>Required</sup> <a name="DiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfig"></a>

```csharp
public ServiceFabricClusterDiagnosticsConfigOutputReference DiagnosticsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference">ServiceFabricClusterDiagnosticsConfigOutputReference</a>

---

##### `FabricSettings`<sup>Required</sup> <a name="FabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettings"></a>

```csharp
public ServiceFabricClusterFabricSettingsList FabricSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList">ServiceFabricClusterFabricSettingsList</a>

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeType"></a>

```csharp
public ServiceFabricClusterNodeTypeList NodeType { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList">ServiceFabricClusterNodeTypeList</a>

---

##### `ReverseProxyCertificate`<sup>Required</sup> <a name="ReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificate"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificateOutputReference ReverseProxyCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference">ServiceFabricClusterReverseProxyCertificateOutputReference</a>

---

##### `ReverseProxyCertificateCommonNames`<sup>Required</sup> <a name="ReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNames"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference ReverseProxyCertificateCommonNames { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference">ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeouts"></a>

```csharp
public ServiceFabricClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference">ServiceFabricClusterTimeoutsOutputReference</a>

---

##### `UpgradePolicy`<sup>Required</sup> <a name="UpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicy"></a>

```csharp
public ServiceFabricClusterUpgradePolicyOutputReference UpgradePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference">ServiceFabricClusterUpgradePolicyOutputReference</a>

---

##### `AddOnFeaturesInput`<sup>Optional</sup> <a name="AddOnFeaturesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeaturesInput"></a>

```csharp
public string[] AddOnFeaturesInput { get; }
```

- *Type:* string[]

---

##### `AzureActiveDirectoryInput`<sup>Optional</sup> <a name="AzureActiveDirectoryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectoryInput"></a>

```csharp
public ServiceFabricClusterAzureActiveDirectory AzureActiveDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---

##### `CertificateCommonNamesInput`<sup>Optional</sup> <a name="CertificateCommonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNamesInput"></a>

```csharp
public ServiceFabricClusterCertificateCommonNames CertificateCommonNamesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateInput"></a>

```csharp
public ServiceFabricClusterCertificate CertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---

##### `ClientCertificateCommonNameInput`<sup>Optional</sup> <a name="ClientCertificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonNameInput"></a>

```csharp
public object ClientCertificateCommonNameInput { get; }
```

- *Type:* object

---

##### `ClientCertificateThumbprintInput`<sup>Optional</sup> <a name="ClientCertificateThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprintInput"></a>

```csharp
public object ClientCertificateThumbprintInput { get; }
```

- *Type:* object

---

##### `ClusterCodeVersionInput`<sup>Optional</sup> <a name="ClusterCodeVersionInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersionInput"></a>

```csharp
public string ClusterCodeVersionInput { get; }
```

- *Type:* string

---

##### `DiagnosticsConfigInput`<sup>Optional</sup> <a name="DiagnosticsConfigInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfigInput"></a>

```csharp
public ServiceFabricClusterDiagnosticsConfig DiagnosticsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---

##### `FabricSettingsInput`<sup>Optional</sup> <a name="FabricSettingsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettingsInput"></a>

```csharp
public object FabricSettingsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagementEndpointInput`<sup>Optional</sup> <a name="ManagementEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpointInput"></a>

```csharp
public string ManagementEndpointInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeTypeInput"></a>

```csharp
public object NodeTypeInput { get; }
```

- *Type:* object

---

##### `ReliabilityLevelInput`<sup>Optional</sup> <a name="ReliabilityLevelInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevelInput"></a>

```csharp
public string ReliabilityLevelInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ReverseProxyCertificateCommonNamesInput`<sup>Optional</sup> <a name="ReverseProxyCertificateCommonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNamesInput"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificateCommonNames ReverseProxyCertificateCommonNamesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---

##### `ReverseProxyCertificateInput`<sup>Optional</sup> <a name="ReverseProxyCertificateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateInput"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificate ReverseProxyCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---

##### `ServiceFabricZonalUpgradeModeInput`<sup>Optional</sup> <a name="ServiceFabricZonalUpgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeModeInput"></a>

```csharp
public string ServiceFabricZonalUpgradeModeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpgradeModeInput`<sup>Optional</sup> <a name="UpgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeModeInput"></a>

```csharp
public string UpgradeModeInput { get; }
```

- *Type:* string

---

##### `UpgradePolicyInput`<sup>Optional</sup> <a name="UpgradePolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicyInput"></a>

```csharp
public ServiceFabricClusterUpgradePolicy UpgradePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---

##### `VmImageInput`<sup>Optional</sup> <a name="VmImageInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImageInput"></a>

```csharp
public string VmImageInput { get; }
```

- *Type:* string

---

##### `VmssZonalUpgradeModeInput`<sup>Optional</sup> <a name="VmssZonalUpgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeModeInput"></a>

```csharp
public string VmssZonalUpgradeModeInput { get; }
```

- *Type:* string

---

##### `AddOnFeatures`<sup>Required</sup> <a name="AddOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeatures"></a>

```csharp
public string[] AddOnFeatures { get; }
```

- *Type:* string[]

---

##### `ClusterCodeVersion`<sup>Required</sup> <a name="ClusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersion"></a>

```csharp
public string ClusterCodeVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpoint"></a>

```csharp
public string ManagementEndpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReliabilityLevel`<sup>Required</sup> <a name="ReliabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevel"></a>

```csharp
public string ReliabilityLevel { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServiceFabricZonalUpgradeMode`<sup>Required</sup> <a name="ServiceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeMode"></a>

```csharp
public string ServiceFabricZonalUpgradeMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpgradeMode`<sup>Required</sup> <a name="UpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeMode"></a>

```csharp
public string UpgradeMode { get; }
```

- *Type:* string

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImage"></a>

```csharp
public string VmImage { get; }
```

- *Type:* string

---

##### `VmssZonalUpgradeMode`<sup>Required</sup> <a name="VmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeMode"></a>

```csharp
public string VmssZonalUpgradeMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceFabricClusterAzureActiveDirectory <a name="ServiceFabricClusterAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterAzureActiveDirectory {
    string ClientApplicationId,
    string ClusterApplicationId,
    string TenantId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clientApplicationId">ClientApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#client_application_id ServiceFabricCluster#client_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clusterApplicationId">ClusterApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#cluster_application_id ServiceFabricCluster#cluster_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#tenant_id ServiceFabricCluster#tenant_id}. |

---

##### `ClientApplicationId`<sup>Required</sup> <a name="ClientApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clientApplicationId"></a>

```csharp
public string ClientApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#client_application_id ServiceFabricCluster#client_application_id}.

---

##### `ClusterApplicationId`<sup>Required</sup> <a name="ClusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clusterApplicationId"></a>

```csharp
public string ClusterApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#cluster_application_id ServiceFabricCluster#cluster_application_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#tenant_id ServiceFabricCluster#tenant_id}.

---

### ServiceFabricClusterCertificate <a name="ServiceFabricClusterCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterCertificate {
    string Thumbprint,
    string X509StoreName,
    string ThumbprintSecondary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.x509StoreName">X509StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprintSecondary">ThumbprintSecondary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}. |

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

##### `X509StoreName`<sup>Required</sup> <a name="X509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.x509StoreName"></a>

```csharp
public string X509StoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

##### `ThumbprintSecondary`<sup>Optional</sup> <a name="ThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprintSecondary"></a>

```csharp
public string ThumbprintSecondary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}.

---

### ServiceFabricClusterCertificateCommonNames <a name="ServiceFabricClusterCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterCertificateCommonNames {
    object CommonNames,
    string X509StoreName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.commonNames">CommonNames</a></code> | <code>object</code> | common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.x509StoreName">X509StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.commonNames"></a>

```csharp
public object CommonNames { get; set; }
```

- *Type:* object

common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#common_names ServiceFabricCluster#common_names}

---

##### `X509StoreName`<sup>Required</sup> <a name="X509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.x509StoreName"></a>

```csharp
public string X509StoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

### ServiceFabricClusterCertificateCommonNamesCommonNames <a name="ServiceFabricClusterCertificateCommonNamesCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterCertificateCommonNamesCommonNames {
    string CertificateCommonName,
    string CertificateIssuerThumbprint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateCommonName">CertificateCommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint">CertificateIssuerThumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}. |

---

##### `CertificateCommonName`<sup>Required</sup> <a name="CertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateCommonName"></a>

```csharp
public string CertificateCommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}.

---

##### `CertificateIssuerThumbprint`<sup>Optional</sup> <a name="CertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint"></a>

```csharp
public string CertificateIssuerThumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}.

---

### ServiceFabricClusterClientCertificateCommonName <a name="ServiceFabricClusterClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterClientCertificateCommonName {
    string CommonName,
    object IsAdmin,
    string IssuerThumbprint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#common_name ServiceFabricCluster#common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.isAdmin">IsAdmin</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.issuerThumbprint">IssuerThumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}. |

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#common_name ServiceFabricCluster#common_name}.

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.isAdmin"></a>

```csharp
public object IsAdmin { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}.

---

##### `IssuerThumbprint`<sup>Optional</sup> <a name="IssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.issuerThumbprint"></a>

```csharp
public string IssuerThumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}.

---

### ServiceFabricClusterClientCertificateThumbprint <a name="ServiceFabricClusterClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterClientCertificateThumbprint {
    object IsAdmin,
    string Thumbprint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.isAdmin">IsAdmin</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.isAdmin"></a>

```csharp
public object IsAdmin { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}.

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

### ServiceFabricClusterConfig <a name="ServiceFabricClusterConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string ManagementEndpoint,
    string Name,
    object NodeType,
    string ReliabilityLevel,
    string ResourceGroupName,
    string UpgradeMode,
    string VmImage,
    string[] AddOnFeatures = null,
    ServiceFabricClusterAzureActiveDirectory AzureActiveDirectory = null,
    ServiceFabricClusterCertificate Certificate = null,
    ServiceFabricClusterCertificateCommonNames CertificateCommonNames = null,
    object ClientCertificateCommonName = null,
    object ClientCertificateThumbprint = null,
    string ClusterCodeVersion = null,
    ServiceFabricClusterDiagnosticsConfig DiagnosticsConfig = null,
    object FabricSettings = null,
    string Id = null,
    ServiceFabricClusterReverseProxyCertificate ReverseProxyCertificate = null,
    ServiceFabricClusterReverseProxyCertificateCommonNames ReverseProxyCertificateCommonNames = null,
    string ServiceFabricZonalUpgradeMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ServiceFabricClusterTimeouts Timeouts = null,
    ServiceFabricClusterUpgradePolicy UpgradePolicy = null,
    string VmssZonalUpgradeMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.managementEndpoint">ManagementEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.nodeType">NodeType</a></code> | <code>object</code> | node_type block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reliabilityLevel">ReliabilityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradeMode">UpgradeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmImage">VmImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.addOnFeatures">AddOnFeatures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.azureActiveDirectory">AzureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | azure_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificateCommonNames">CertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | certificate_common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateCommonName">ClientCertificateCommonName</a></code> | <code>object</code> | client_certificate_common_name block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateThumbprint">ClientCertificateThumbprint</a></code> | <code>object</code> | client_certificate_thumbprint block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clusterCodeVersion">ClusterCodeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.diagnosticsConfig">DiagnosticsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | diagnostics_config block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.fabricSettings">FabricSettings</a></code> | <code>object</code> | fabric_settings block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificate">ReverseProxyCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | reverse_proxy_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificateCommonNames">ReverseProxyCertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | reverse_proxy_certificate_common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.serviceFabricZonalUpgradeMode">ServiceFabricZonalUpgradeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmssZonalUpgradeMode">VmssZonalUpgradeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}.

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.managementEndpoint"></a>

```csharp
public string ManagementEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.nodeType"></a>

```csharp
public object NodeType { get; set; }
```

- *Type:* object

node_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#node_type ServiceFabricCluster#node_type}

---

##### `ReliabilityLevel`<sup>Required</sup> <a name="ReliabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reliabilityLevel"></a>

```csharp
public string ReliabilityLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}.

---

##### `UpgradeMode`<sup>Required</sup> <a name="UpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradeMode"></a>

```csharp
public string UpgradeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}.

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmImage"></a>

```csharp
public string VmImage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}.

---

##### `AddOnFeatures`<sup>Optional</sup> <a name="AddOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.addOnFeatures"></a>

```csharp
public string[] AddOnFeatures { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}.

---

##### `AzureActiveDirectory`<sup>Optional</sup> <a name="AzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.azureActiveDirectory"></a>

```csharp
public ServiceFabricClusterAzureActiveDirectory AzureActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

azure_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#azure_active_directory ServiceFabricCluster#azure_active_directory}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificate"></a>

```csharp
public ServiceFabricClusterCertificate Certificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate ServiceFabricCluster#certificate}

---

##### `CertificateCommonNames`<sup>Optional</sup> <a name="CertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificateCommonNames"></a>

```csharp
public ServiceFabricClusterCertificateCommonNames CertificateCommonNames { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

certificate_common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_common_names ServiceFabricCluster#certificate_common_names}

---

##### `ClientCertificateCommonName`<sup>Optional</sup> <a name="ClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateCommonName"></a>

```csharp
public object ClientCertificateCommonName { get; set; }
```

- *Type:* object

client_certificate_common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#client_certificate_common_name ServiceFabricCluster#client_certificate_common_name}

---

##### `ClientCertificateThumbprint`<sup>Optional</sup> <a name="ClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateThumbprint"></a>

```csharp
public object ClientCertificateThumbprint { get; set; }
```

- *Type:* object

client_certificate_thumbprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#client_certificate_thumbprint ServiceFabricCluster#client_certificate_thumbprint}

---

##### `ClusterCodeVersion`<sup>Optional</sup> <a name="ClusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clusterCodeVersion"></a>

```csharp
public string ClusterCodeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}.

---

##### `DiagnosticsConfig`<sup>Optional</sup> <a name="DiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.diagnosticsConfig"></a>

```csharp
public ServiceFabricClusterDiagnosticsConfig DiagnosticsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

diagnostics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#diagnostics_config ServiceFabricCluster#diagnostics_config}

---

##### `FabricSettings`<sup>Optional</sup> <a name="FabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.fabricSettings"></a>

```csharp
public object FabricSettings { get; set; }
```

- *Type:* object

fabric_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#fabric_settings ServiceFabricCluster#fabric_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReverseProxyCertificate`<sup>Optional</sup> <a name="ReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificate"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificate ReverseProxyCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

reverse_proxy_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate ServiceFabricCluster#reverse_proxy_certificate}

---

##### `ReverseProxyCertificateCommonNames`<sup>Optional</sup> <a name="ReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificateCommonNames"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificateCommonNames ReverseProxyCertificateCommonNames { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

reverse_proxy_certificate_common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate_common_names ServiceFabricCluster#reverse_proxy_certificate_common_names}

---

##### `ServiceFabricZonalUpgradeMode`<sup>Optional</sup> <a name="ServiceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.serviceFabricZonalUpgradeMode"></a>

```csharp
public string ServiceFabricZonalUpgradeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.timeouts"></a>

```csharp
public ServiceFabricClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#timeouts ServiceFabricCluster#timeouts}

---

##### `UpgradePolicy`<sup>Optional</sup> <a name="UpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradePolicy"></a>

```csharp
public ServiceFabricClusterUpgradePolicy UpgradePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_policy ServiceFabricCluster#upgrade_policy}

---

##### `VmssZonalUpgradeMode`<sup>Optional</sup> <a name="VmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmssZonalUpgradeMode"></a>

```csharp
public string VmssZonalUpgradeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}.

---

### ServiceFabricClusterDiagnosticsConfig <a name="ServiceFabricClusterDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterDiagnosticsConfig {
    string BlobEndpoint,
    string ProtectedAccountKeyName,
    string QueueEndpoint,
    string StorageAccountName,
    string TableEndpoint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.blobEndpoint">BlobEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#blob_endpoint ServiceFabricCluster#blob_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.protectedAccountKeyName">ProtectedAccountKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#protected_account_key_name ServiceFabricCluster#protected_account_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.queueEndpoint">QueueEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#queue_endpoint ServiceFabricCluster#queue_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#storage_account_name ServiceFabricCluster#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.tableEndpoint">TableEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#table_endpoint ServiceFabricCluster#table_endpoint}. |

---

##### `BlobEndpoint`<sup>Required</sup> <a name="BlobEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.blobEndpoint"></a>

```csharp
public string BlobEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#blob_endpoint ServiceFabricCluster#blob_endpoint}.

---

##### `ProtectedAccountKeyName`<sup>Required</sup> <a name="ProtectedAccountKeyName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.protectedAccountKeyName"></a>

```csharp
public string ProtectedAccountKeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#protected_account_key_name ServiceFabricCluster#protected_account_key_name}.

---

##### `QueueEndpoint`<sup>Required</sup> <a name="QueueEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.queueEndpoint"></a>

```csharp
public string QueueEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#queue_endpoint ServiceFabricCluster#queue_endpoint}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#storage_account_name ServiceFabricCluster#storage_account_name}.

---

##### `TableEndpoint`<sup>Required</sup> <a name="TableEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.tableEndpoint"></a>

```csharp
public string TableEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#table_endpoint ServiceFabricCluster#table_endpoint}.

---

### ServiceFabricClusterFabricSettings <a name="ServiceFabricClusterFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterFabricSettings {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#parameters ServiceFabricCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#parameters ServiceFabricCluster#parameters}.

---

### ServiceFabricClusterNodeType <a name="ServiceFabricClusterNodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterNodeType {
    double ClientEndpointPort,
    double HttpEndpointPort,
    double InstanceCount,
    object IsPrimary,
    string Name,
    ServiceFabricClusterNodeTypeApplicationPorts ApplicationPorts = null,
    System.Collections.Generic.IDictionary<string, string> Capacities = null,
    string DurabilityLevel = null,
    ServiceFabricClusterNodeTypeEphemeralPorts EphemeralPorts = null,
    object IsStateless = null,
    object MultipleAvailabilityZones = null,
    System.Collections.Generic.IDictionary<string, string> PlacementProperties = null,
    double ReverseProxyEndpointPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.clientEndpointPort">ClientEndpointPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#client_endpoint_port ServiceFabricCluster#client_endpoint_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.httpEndpointPort">HttpEndpointPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#http_endpoint_port ServiceFabricCluster#http_endpoint_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#instance_count ServiceFabricCluster#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isPrimary">IsPrimary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#is_primary ServiceFabricCluster#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.applicationPorts">ApplicationPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | application_ports block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.capacities">Capacities</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#capacities ServiceFabricCluster#capacities}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.durabilityLevel">DurabilityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#durability_level ServiceFabricCluster#durability_level}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.ephemeralPorts">EphemeralPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | ephemeral_ports block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isStateless">IsStateless</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#is_stateless ServiceFabricCluster#is_stateless}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.multipleAvailabilityZones">MultipleAvailabilityZones</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.placementProperties">PlacementProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#placement_properties ServiceFabricCluster#placement_properties}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.reverseProxyEndpointPort">ReverseProxyEndpointPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}. |

---

##### `ClientEndpointPort`<sup>Required</sup> <a name="ClientEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.clientEndpointPort"></a>

```csharp
public double ClientEndpointPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#client_endpoint_port ServiceFabricCluster#client_endpoint_port}.

---

##### `HttpEndpointPort`<sup>Required</sup> <a name="HttpEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.httpEndpointPort"></a>

```csharp
public double HttpEndpointPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#http_endpoint_port ServiceFabricCluster#http_endpoint_port}.

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#instance_count ServiceFabricCluster#instance_count}.

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isPrimary"></a>

```csharp
public object IsPrimary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#is_primary ServiceFabricCluster#is_primary}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `ApplicationPorts`<sup>Optional</sup> <a name="ApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.applicationPorts"></a>

```csharp
public ServiceFabricClusterNodeTypeApplicationPorts ApplicationPorts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

application_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#application_ports ServiceFabricCluster#application_ports}

---

##### `Capacities`<sup>Optional</sup> <a name="Capacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.capacities"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Capacities { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#capacities ServiceFabricCluster#capacities}.

---

##### `DurabilityLevel`<sup>Optional</sup> <a name="DurabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.durabilityLevel"></a>

```csharp
public string DurabilityLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#durability_level ServiceFabricCluster#durability_level}.

---

##### `EphemeralPorts`<sup>Optional</sup> <a name="EphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.ephemeralPorts"></a>

```csharp
public ServiceFabricClusterNodeTypeEphemeralPorts EphemeralPorts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

ephemeral_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#ephemeral_ports ServiceFabricCluster#ephemeral_ports}

---

##### `IsStateless`<sup>Optional</sup> <a name="IsStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isStateless"></a>

```csharp
public object IsStateless { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#is_stateless ServiceFabricCluster#is_stateless}.

---

##### `MultipleAvailabilityZones`<sup>Optional</sup> <a name="MultipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.multipleAvailabilityZones"></a>

```csharp
public object MultipleAvailabilityZones { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}.

---

##### `PlacementProperties`<sup>Optional</sup> <a name="PlacementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.placementProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PlacementProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#placement_properties ServiceFabricCluster#placement_properties}.

---

##### `ReverseProxyEndpointPort`<sup>Optional</sup> <a name="ReverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.reverseProxyEndpointPort"></a>

```csharp
public double ReverseProxyEndpointPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}.

---

### ServiceFabricClusterNodeTypeApplicationPorts <a name="ServiceFabricClusterNodeTypeApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterNodeTypeApplicationPorts {
    double EndPort,
    double StartPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.endPort">EndPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.startPort">StartPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}. |

---

##### `EndPort`<sup>Required</sup> <a name="EndPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.endPort"></a>

```csharp
public double EndPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}.

---

##### `StartPort`<sup>Required</sup> <a name="StartPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.startPort"></a>

```csharp
public double StartPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}.

---

### ServiceFabricClusterNodeTypeEphemeralPorts <a name="ServiceFabricClusterNodeTypeEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterNodeTypeEphemeralPorts {
    double EndPort,
    double StartPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.endPort">EndPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.startPort">StartPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}. |

---

##### `EndPort`<sup>Required</sup> <a name="EndPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.endPort"></a>

```csharp
public double EndPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}.

---

##### `StartPort`<sup>Required</sup> <a name="StartPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.startPort"></a>

```csharp
public double StartPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}.

---

### ServiceFabricClusterReverseProxyCertificate <a name="ServiceFabricClusterReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterReverseProxyCertificate {
    string Thumbprint,
    string X509StoreName,
    string ThumbprintSecondary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.x509StoreName">X509StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprintSecondary">ThumbprintSecondary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}. |

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

##### `X509StoreName`<sup>Required</sup> <a name="X509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.x509StoreName"></a>

```csharp
public string X509StoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

##### `ThumbprintSecondary`<sup>Optional</sup> <a name="ThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprintSecondary"></a>

```csharp
public string ThumbprintSecondary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}.

---

### ServiceFabricClusterReverseProxyCertificateCommonNames <a name="ServiceFabricClusterReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterReverseProxyCertificateCommonNames {
    object CommonNames,
    string X509StoreName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.commonNames">CommonNames</a></code> | <code>object</code> | common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.x509StoreName">X509StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.commonNames"></a>

```csharp
public object CommonNames { get; set; }
```

- *Type:* object

common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#common_names ServiceFabricCluster#common_names}

---

##### `X509StoreName`<sup>Required</sup> <a name="X509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.x509StoreName"></a>

```csharp
public string X509StoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames {
    string CertificateCommonName,
    string CertificateIssuerThumbprint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateCommonName">CertificateCommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint">CertificateIssuerThumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}. |

---

##### `CertificateCommonName`<sup>Required</sup> <a name="CertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateCommonName"></a>

```csharp
public string CertificateCommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}.

---

##### `CertificateIssuerThumbprint`<sup>Optional</sup> <a name="CertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint"></a>

```csharp
public string CertificateIssuerThumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}.

---

### ServiceFabricClusterTimeouts <a name="ServiceFabricClusterTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#create ServiceFabricCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#delete ServiceFabricCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#read ServiceFabricCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#update ServiceFabricCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#create ServiceFabricCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#delete ServiceFabricCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#read ServiceFabricCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#update ServiceFabricCluster#update}.

---

### ServiceFabricClusterUpgradePolicy <a name="ServiceFabricClusterUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterUpgradePolicy {
    ServiceFabricClusterUpgradePolicyDeltaHealthPolicy DeltaHealthPolicy = null,
    object ForceRestartEnabled = null,
    string HealthCheckRetryTimeout = null,
    string HealthCheckStableDuration = null,
    string HealthCheckWaitDuration = null,
    ServiceFabricClusterUpgradePolicyHealthPolicy HealthPolicy = null,
    string UpgradeDomainTimeout = null,
    string UpgradeReplicaSetCheckTimeout = null,
    string UpgradeTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.deltaHealthPolicy">DeltaHealthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | delta_health_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.forceRestartEnabled">ForceRestartEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#force_restart_enabled ServiceFabricCluster#force_restart_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckRetryTimeout">HealthCheckRetryTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckStableDuration">HealthCheckStableDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckWaitDuration">HealthCheckWaitDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthPolicy">HealthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | health_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeDomainTimeout">UpgradeDomainTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeReplicaSetCheckTimeout">UpgradeReplicaSetCheckTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeTimeout">UpgradeTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_timeout ServiceFabricCluster#upgrade_timeout}. |

---

##### `DeltaHealthPolicy`<sup>Optional</sup> <a name="DeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.deltaHealthPolicy"></a>

```csharp
public ServiceFabricClusterUpgradePolicyDeltaHealthPolicy DeltaHealthPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

delta_health_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#delta_health_policy ServiceFabricCluster#delta_health_policy}

---

##### `ForceRestartEnabled`<sup>Optional</sup> <a name="ForceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.forceRestartEnabled"></a>

```csharp
public object ForceRestartEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#force_restart_enabled ServiceFabricCluster#force_restart_enabled}.

---

##### `HealthCheckRetryTimeout`<sup>Optional</sup> <a name="HealthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckRetryTimeout"></a>

```csharp
public string HealthCheckRetryTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}.

---

##### `HealthCheckStableDuration`<sup>Optional</sup> <a name="HealthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckStableDuration"></a>

```csharp
public string HealthCheckStableDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}.

---

##### `HealthCheckWaitDuration`<sup>Optional</sup> <a name="HealthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckWaitDuration"></a>

```csharp
public string HealthCheckWaitDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}.

---

##### `HealthPolicy`<sup>Optional</sup> <a name="HealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthPolicy"></a>

```csharp
public ServiceFabricClusterUpgradePolicyHealthPolicy HealthPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

health_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#health_policy ServiceFabricCluster#health_policy}

---

##### `UpgradeDomainTimeout`<sup>Optional</sup> <a name="UpgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeDomainTimeout"></a>

```csharp
public string UpgradeDomainTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}.

---

##### `UpgradeReplicaSetCheckTimeout`<sup>Optional</sup> <a name="UpgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeReplicaSetCheckTimeout"></a>

```csharp
public string UpgradeReplicaSetCheckTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}.

---

##### `UpgradeTimeout`<sup>Optional</sup> <a name="UpgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeTimeout"></a>

```csharp
public string UpgradeTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#upgrade_timeout ServiceFabricCluster#upgrade_timeout}.

---

### ServiceFabricClusterUpgradePolicyDeltaHealthPolicy <a name="ServiceFabricClusterUpgradePolicyDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterUpgradePolicyDeltaHealthPolicy {
    double MaxDeltaUnhealthyApplicationsPercent = null,
    double MaxDeltaUnhealthyNodesPercent = null,
    double MaxUpgradeDomainDeltaUnhealthyNodesPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyApplicationsPercent">MaxDeltaUnhealthyApplicationsPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyNodesPercent">MaxDeltaUnhealthyNodesPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxUpgradeDomainDeltaUnhealthyNodesPercent">MaxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}. |

---

##### `MaxDeltaUnhealthyApplicationsPercent`<sup>Optional</sup> <a name="MaxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyApplicationsPercent"></a>

```csharp
public double MaxDeltaUnhealthyApplicationsPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}.

---

##### `MaxDeltaUnhealthyNodesPercent`<sup>Optional</sup> <a name="MaxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyNodesPercent"></a>

```csharp
public double MaxDeltaUnhealthyNodesPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}.

---

##### `MaxUpgradeDomainDeltaUnhealthyNodesPercent`<sup>Optional</sup> <a name="MaxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```csharp
public double MaxUpgradeDomainDeltaUnhealthyNodesPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}.

---

### ServiceFabricClusterUpgradePolicyHealthPolicy <a name="ServiceFabricClusterUpgradePolicyHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterUpgradePolicyHealthPolicy {
    double MaxUnhealthyApplicationsPercent = null,
    double MaxUnhealthyNodesPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyApplicationsPercent">MaxUnhealthyApplicationsPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyNodesPercent">MaxUnhealthyNodesPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}. |

---

##### `MaxUnhealthyApplicationsPercent`<sup>Optional</sup> <a name="MaxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyApplicationsPercent"></a>

```csharp
public double MaxUnhealthyApplicationsPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}.

---

##### `MaxUnhealthyNodesPercent`<sup>Optional</sup> <a name="MaxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyNodesPercent"></a>

```csharp
public double MaxUnhealthyNodesPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/service_fabric_cluster#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceFabricClusterAzureActiveDirectoryOutputReference <a name="ServiceFabricClusterAzureActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterAzureActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationIdInput">ClientApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationIdInput">ClusterApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationId">ClientApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationId">ClusterApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientApplicationIdInput`<sup>Optional</sup> <a name="ClientApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationIdInput"></a>

```csharp
public string ClientApplicationIdInput { get; }
```

- *Type:* string

---

##### `ClusterApplicationIdInput`<sup>Optional</sup> <a name="ClusterApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationIdInput"></a>

```csharp
public string ClusterApplicationIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientApplicationId`<sup>Required</sup> <a name="ClientApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationId"></a>

```csharp
public string ClientApplicationId { get; }
```

- *Type:* string

---

##### `ClusterApplicationId`<sup>Required</sup> <a name="ClusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationId"></a>

```csharp
public string ClusterApplicationId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterAzureActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---


### ServiceFabricClusterCertificateCommonNamesCommonNamesList <a name="ServiceFabricClusterCertificateCommonNamesCommonNamesList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterCertificateCommonNamesCommonNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get"></a>

```csharp
private ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference <a name="ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint">ResetCertificateIssuerThumbprint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateIssuerThumbprint` <a name="ResetCertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint"></a>

```csharp
private void ResetCertificateIssuerThumbprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput">CertificateCommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput">CertificateIssuerThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName">CertificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint">CertificateIssuerThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateCommonNameInput`<sup>Optional</sup> <a name="CertificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput"></a>

```csharp
public string CertificateCommonNameInput { get; }
```

- *Type:* string

---

##### `CertificateIssuerThumbprintInput`<sup>Optional</sup> <a name="CertificateIssuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput"></a>

```csharp
public string CertificateIssuerThumbprintInput { get; }
```

- *Type:* string

---

##### `CertificateCommonName`<sup>Required</sup> <a name="CertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName"></a>

```csharp
public string CertificateCommonName { get; }
```

- *Type:* string

---

##### `CertificateIssuerThumbprint`<sup>Required</sup> <a name="CertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint"></a>

```csharp
public string CertificateIssuerThumbprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterCertificateCommonNamesOutputReference <a name="ServiceFabricClusterCertificateCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterCertificateCommonNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames">PutCommonNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCommonNames` <a name="PutCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames"></a>

```csharp
private void PutCommonNames(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNames">CommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList">ServiceFabricClusterCertificateCommonNamesCommonNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreNameInput">X509StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreName">X509StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNames"></a>

```csharp
public ServiceFabricClusterCertificateCommonNamesCommonNamesList CommonNames { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList">ServiceFabricClusterCertificateCommonNamesCommonNamesList</a>

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNamesInput"></a>

```csharp
public object CommonNamesInput { get; }
```

- *Type:* object

---

##### `X509StoreNameInput`<sup>Optional</sup> <a name="X509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreNameInput"></a>

```csharp
public string X509StoreNameInput { get; }
```

- *Type:* string

---

##### `X509StoreName`<sup>Required</sup> <a name="X509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreName"></a>

```csharp
public string X509StoreName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterCertificateCommonNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---


### ServiceFabricClusterCertificateOutputReference <a name="ServiceFabricClusterCertificateOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resetThumbprintSecondary">ResetThumbprintSecondary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThumbprintSecondary` <a name="ResetThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resetThumbprintSecondary"></a>

```csharp
private void ResetThumbprintSecondary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondaryInput">ThumbprintSecondaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreNameInput">X509StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondary">ThumbprintSecondary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreName">X509StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `ThumbprintSecondaryInput`<sup>Optional</sup> <a name="ThumbprintSecondaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondaryInput"></a>

```csharp
public string ThumbprintSecondaryInput { get; }
```

- *Type:* string

---

##### `X509StoreNameInput`<sup>Optional</sup> <a name="X509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreNameInput"></a>

```csharp
public string X509StoreNameInput { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `ThumbprintSecondary`<sup>Required</sup> <a name="ThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondary"></a>

```csharp
public string ThumbprintSecondary { get; }
```

- *Type:* string

---

##### `X509StoreName`<sup>Required</sup> <a name="X509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreName"></a>

```csharp
public string X509StoreName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---


### ServiceFabricClusterClientCertificateCommonNameList <a name="ServiceFabricClusterClientCertificateCommonNameList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterClientCertificateCommonNameList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get"></a>

```csharp
private ServiceFabricClusterClientCertificateCommonNameOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterClientCertificateCommonNameOutputReference <a name="ServiceFabricClusterClientCertificateCommonNameOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterClientCertificateCommonNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resetIssuerThumbprint">ResetIssuerThumbprint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIssuerThumbprint` <a name="ResetIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resetIssuerThumbprint"></a>

```csharp
private void ResetIssuerThumbprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdminInput">IsAdminInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprintInput">IssuerThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdmin">IsAdmin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprint">IssuerThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `IsAdminInput`<sup>Optional</sup> <a name="IsAdminInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdminInput"></a>

```csharp
public object IsAdminInput { get; }
```

- *Type:* object

---

##### `IssuerThumbprintInput`<sup>Optional</sup> <a name="IssuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprintInput"></a>

```csharp
public string IssuerThumbprintInput { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdmin"></a>

```csharp
public object IsAdmin { get; }
```

- *Type:* object

---

##### `IssuerThumbprint`<sup>Required</sup> <a name="IssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprint"></a>

```csharp
public string IssuerThumbprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterClientCertificateThumbprintList <a name="ServiceFabricClusterClientCertificateThumbprintList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterClientCertificateThumbprintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get"></a>

```csharp
private ServiceFabricClusterClientCertificateThumbprintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterClientCertificateThumbprintOutputReference <a name="ServiceFabricClusterClientCertificateThumbprintOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterClientCertificateThumbprintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdminInput">IsAdminInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdmin">IsAdmin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsAdminInput`<sup>Optional</sup> <a name="IsAdminInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdminInput"></a>

```csharp
public object IsAdminInput { get; }
```

- *Type:* object

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdmin"></a>

```csharp
public object IsAdmin { get; }
```

- *Type:* object

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterDiagnosticsConfigOutputReference <a name="ServiceFabricClusterDiagnosticsConfigOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterDiagnosticsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpointInput">BlobEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyNameInput">ProtectedAccountKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpointInput">QueueEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpointInput">TableEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpoint">BlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyName">ProtectedAccountKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpoint">QueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpoint">TableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlobEndpointInput`<sup>Optional</sup> <a name="BlobEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpointInput"></a>

```csharp
public string BlobEndpointInput { get; }
```

- *Type:* string

---

##### `ProtectedAccountKeyNameInput`<sup>Optional</sup> <a name="ProtectedAccountKeyNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyNameInput"></a>

```csharp
public string ProtectedAccountKeyNameInput { get; }
```

- *Type:* string

---

##### `QueueEndpointInput`<sup>Optional</sup> <a name="QueueEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpointInput"></a>

```csharp
public string QueueEndpointInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `TableEndpointInput`<sup>Optional</sup> <a name="TableEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpointInput"></a>

```csharp
public string TableEndpointInput { get; }
```

- *Type:* string

---

##### `BlobEndpoint`<sup>Required</sup> <a name="BlobEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpoint"></a>

```csharp
public string BlobEndpoint { get; }
```

- *Type:* string

---

##### `ProtectedAccountKeyName`<sup>Required</sup> <a name="ProtectedAccountKeyName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyName"></a>

```csharp
public string ProtectedAccountKeyName { get; }
```

- *Type:* string

---

##### `QueueEndpoint`<sup>Required</sup> <a name="QueueEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpoint"></a>

```csharp
public string QueueEndpoint { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `TableEndpoint`<sup>Required</sup> <a name="TableEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpoint"></a>

```csharp
public string TableEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterDiagnosticsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---


### ServiceFabricClusterFabricSettingsList <a name="ServiceFabricClusterFabricSettingsList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterFabricSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get"></a>

```csharp
private ServiceFabricClusterFabricSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterFabricSettingsOutputReference <a name="ServiceFabricClusterFabricSettingsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterFabricSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterNodeTypeApplicationPortsOutputReference <a name="ServiceFabricClusterNodeTypeApplicationPortsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterNodeTypeApplicationPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPortInput">EndPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPortInput">StartPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPort">EndPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPort">StartPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPortInput`<sup>Optional</sup> <a name="EndPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPortInput"></a>

```csharp
public double EndPortInput { get; }
```

- *Type:* double

---

##### `StartPortInput`<sup>Optional</sup> <a name="StartPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPortInput"></a>

```csharp
public double StartPortInput { get; }
```

- *Type:* double

---

##### `EndPort`<sup>Required</sup> <a name="EndPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPort"></a>

```csharp
public double EndPort { get; }
```

- *Type:* double

---

##### `StartPort`<sup>Required</sup> <a name="StartPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPort"></a>

```csharp
public double StartPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterNodeTypeApplicationPorts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---


### ServiceFabricClusterNodeTypeEphemeralPortsOutputReference <a name="ServiceFabricClusterNodeTypeEphemeralPortsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterNodeTypeEphemeralPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPortInput">EndPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPortInput">StartPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPort">EndPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPort">StartPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPortInput`<sup>Optional</sup> <a name="EndPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPortInput"></a>

```csharp
public double EndPortInput { get; }
```

- *Type:* double

---

##### `StartPortInput`<sup>Optional</sup> <a name="StartPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPortInput"></a>

```csharp
public double StartPortInput { get; }
```

- *Type:* double

---

##### `EndPort`<sup>Required</sup> <a name="EndPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPort"></a>

```csharp
public double EndPort { get; }
```

- *Type:* double

---

##### `StartPort`<sup>Required</sup> <a name="StartPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPort"></a>

```csharp
public double StartPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterNodeTypeEphemeralPorts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---


### ServiceFabricClusterNodeTypeList <a name="ServiceFabricClusterNodeTypeList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterNodeTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get"></a>

```csharp
private ServiceFabricClusterNodeTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterNodeTypeOutputReference <a name="ServiceFabricClusterNodeTypeOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterNodeTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts">PutApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts">PutEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetApplicationPorts">ResetApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetCapacities">ResetCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetDurabilityLevel">ResetDurabilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetEphemeralPorts">ResetEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetIsStateless">ResetIsStateless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetMultipleAvailabilityZones">ResetMultipleAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetPlacementProperties">ResetPlacementProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetReverseProxyEndpointPort">ResetReverseProxyEndpointPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationPorts` <a name="PutApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts"></a>

```csharp
private void PutApplicationPorts(ServiceFabricClusterNodeTypeApplicationPorts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---

##### `PutEphemeralPorts` <a name="PutEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts"></a>

```csharp
private void PutEphemeralPorts(ServiceFabricClusterNodeTypeEphemeralPorts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---

##### `ResetApplicationPorts` <a name="ResetApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetApplicationPorts"></a>

```csharp
private void ResetApplicationPorts()
```

##### `ResetCapacities` <a name="ResetCapacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetCapacities"></a>

```csharp
private void ResetCapacities()
```

##### `ResetDurabilityLevel` <a name="ResetDurabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetDurabilityLevel"></a>

```csharp
private void ResetDurabilityLevel()
```

##### `ResetEphemeralPorts` <a name="ResetEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetEphemeralPorts"></a>

```csharp
private void ResetEphemeralPorts()
```

##### `ResetIsStateless` <a name="ResetIsStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetIsStateless"></a>

```csharp
private void ResetIsStateless()
```

##### `ResetMultipleAvailabilityZones` <a name="ResetMultipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetMultipleAvailabilityZones"></a>

```csharp
private void ResetMultipleAvailabilityZones()
```

##### `ResetPlacementProperties` <a name="ResetPlacementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetPlacementProperties"></a>

```csharp
private void ResetPlacementProperties()
```

##### `ResetReverseProxyEndpointPort` <a name="ResetReverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetReverseProxyEndpointPort"></a>

```csharp
private void ResetReverseProxyEndpointPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPorts">ApplicationPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference">ServiceFabricClusterNodeTypeApplicationPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPorts">EphemeralPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference">ServiceFabricClusterNodeTypeEphemeralPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPortsInput">ApplicationPortsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacitiesInput">CapacitiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPortInput">ClientEndpointPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevelInput">DurabilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPortsInput">EphemeralPortsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPortInput">HttpEndpointPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStatelessInput">IsStatelessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZonesInput">MultipleAvailabilityZonesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementPropertiesInput">PlacementPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPortInput">ReverseProxyEndpointPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacities">Capacities</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPort">ClientEndpointPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevel">DurabilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPort">HttpEndpointPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimary">IsPrimary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStateless">IsStateless</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZones">MultipleAvailabilityZones</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementProperties">PlacementProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPort">ReverseProxyEndpointPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationPorts`<sup>Required</sup> <a name="ApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPorts"></a>

```csharp
public ServiceFabricClusterNodeTypeApplicationPortsOutputReference ApplicationPorts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference">ServiceFabricClusterNodeTypeApplicationPortsOutputReference</a>

---

##### `EphemeralPorts`<sup>Required</sup> <a name="EphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPorts"></a>

```csharp
public ServiceFabricClusterNodeTypeEphemeralPortsOutputReference EphemeralPorts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference">ServiceFabricClusterNodeTypeEphemeralPortsOutputReference</a>

---

##### `ApplicationPortsInput`<sup>Optional</sup> <a name="ApplicationPortsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPortsInput"></a>

```csharp
public ServiceFabricClusterNodeTypeApplicationPorts ApplicationPortsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---

##### `CapacitiesInput`<sup>Optional</sup> <a name="CapacitiesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacitiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CapacitiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientEndpointPortInput`<sup>Optional</sup> <a name="ClientEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPortInput"></a>

```csharp
public double ClientEndpointPortInput { get; }
```

- *Type:* double

---

##### `DurabilityLevelInput`<sup>Optional</sup> <a name="DurabilityLevelInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevelInput"></a>

```csharp
public string DurabilityLevelInput { get; }
```

- *Type:* string

---

##### `EphemeralPortsInput`<sup>Optional</sup> <a name="EphemeralPortsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPortsInput"></a>

```csharp
public ServiceFabricClusterNodeTypeEphemeralPorts EphemeralPortsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---

##### `HttpEndpointPortInput`<sup>Optional</sup> <a name="HttpEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPortInput"></a>

```csharp
public double HttpEndpointPortInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimaryInput"></a>

```csharp
public object IsPrimaryInput { get; }
```

- *Type:* object

---

##### `IsStatelessInput`<sup>Optional</sup> <a name="IsStatelessInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStatelessInput"></a>

```csharp
public object IsStatelessInput { get; }
```

- *Type:* object

---

##### `MultipleAvailabilityZonesInput`<sup>Optional</sup> <a name="MultipleAvailabilityZonesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZonesInput"></a>

```csharp
public object MultipleAvailabilityZonesInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlacementPropertiesInput`<sup>Optional</sup> <a name="PlacementPropertiesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PlacementPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReverseProxyEndpointPortInput`<sup>Optional</sup> <a name="ReverseProxyEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPortInput"></a>

```csharp
public double ReverseProxyEndpointPortInput { get; }
```

- *Type:* double

---

##### `Capacities`<sup>Required</sup> <a name="Capacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacities"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Capacities { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientEndpointPort`<sup>Required</sup> <a name="ClientEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPort"></a>

```csharp
public double ClientEndpointPort { get; }
```

- *Type:* double

---

##### `DurabilityLevel`<sup>Required</sup> <a name="DurabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevel"></a>

```csharp
public string DurabilityLevel { get; }
```

- *Type:* string

---

##### `HttpEndpointPort`<sup>Required</sup> <a name="HttpEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPort"></a>

```csharp
public double HttpEndpointPort { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimary"></a>

```csharp
public object IsPrimary { get; }
```

- *Type:* object

---

##### `IsStateless`<sup>Required</sup> <a name="IsStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStateless"></a>

```csharp
public object IsStateless { get; }
```

- *Type:* object

---

##### `MultipleAvailabilityZones`<sup>Required</sup> <a name="MultipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZones"></a>

```csharp
public object MultipleAvailabilityZones { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlacementProperties`<sup>Required</sup> <a name="PlacementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PlacementProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReverseProxyEndpointPort`<sup>Required</sup> <a name="ReverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPort"></a>

```csharp
public double ReverseProxyEndpointPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get"></a>

```csharp
private ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint">ResetCertificateIssuerThumbprint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateIssuerThumbprint` <a name="ResetCertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint"></a>

```csharp
private void ResetCertificateIssuerThumbprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput">CertificateCommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput">CertificateIssuerThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName">CertificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint">CertificateIssuerThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateCommonNameInput`<sup>Optional</sup> <a name="CertificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput"></a>

```csharp
public string CertificateCommonNameInput { get; }
```

- *Type:* string

---

##### `CertificateIssuerThumbprintInput`<sup>Optional</sup> <a name="CertificateIssuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput"></a>

```csharp
public string CertificateIssuerThumbprintInput { get; }
```

- *Type:* string

---

##### `CertificateCommonName`<sup>Required</sup> <a name="CertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName"></a>

```csharp
public string CertificateCommonName { get; }
```

- *Type:* string

---

##### `CertificateIssuerThumbprint`<sup>Required</sup> <a name="CertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint"></a>

```csharp
public string CertificateIssuerThumbprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames">PutCommonNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCommonNames` <a name="PutCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames"></a>

```csharp
private void PutCommonNames(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNames">CommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreNameInput">X509StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreName">X509StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNames"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList CommonNames { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList</a>

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNamesInput"></a>

```csharp
public object CommonNamesInput { get; }
```

- *Type:* object

---

##### `X509StoreNameInput`<sup>Optional</sup> <a name="X509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreNameInput"></a>

```csharp
public string X509StoreNameInput { get; }
```

- *Type:* string

---

##### `X509StoreName`<sup>Required</sup> <a name="X509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreName"></a>

```csharp
public string X509StoreName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificateCommonNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---


### ServiceFabricClusterReverseProxyCertificateOutputReference <a name="ServiceFabricClusterReverseProxyCertificateOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterReverseProxyCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resetThumbprintSecondary">ResetThumbprintSecondary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThumbprintSecondary` <a name="ResetThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resetThumbprintSecondary"></a>

```csharp
private void ResetThumbprintSecondary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondaryInput">ThumbprintSecondaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreNameInput">X509StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondary">ThumbprintSecondary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreName">X509StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `ThumbprintSecondaryInput`<sup>Optional</sup> <a name="ThumbprintSecondaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondaryInput"></a>

```csharp
public string ThumbprintSecondaryInput { get; }
```

- *Type:* string

---

##### `X509StoreNameInput`<sup>Optional</sup> <a name="X509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreNameInput"></a>

```csharp
public string X509StoreNameInput { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `ThumbprintSecondary`<sup>Required</sup> <a name="ThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondary"></a>

```csharp
public string ThumbprintSecondary { get; }
```

- *Type:* string

---

##### `X509StoreName`<sup>Required</sup> <a name="X509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreName"></a>

```csharp
public string X509StoreName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterReverseProxyCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---


### ServiceFabricClusterTimeoutsOutputReference <a name="ServiceFabricClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyApplicationsPercent">ResetMaxDeltaUnhealthyApplicationsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyNodesPercent">ResetMaxDeltaUnhealthyNodesPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxUpgradeDomainDeltaUnhealthyNodesPercent">ResetMaxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxDeltaUnhealthyApplicationsPercent` <a name="ResetMaxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyApplicationsPercent"></a>

```csharp
private void ResetMaxDeltaUnhealthyApplicationsPercent()
```

##### `ResetMaxDeltaUnhealthyNodesPercent` <a name="ResetMaxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyNodesPercent"></a>

```csharp
private void ResetMaxDeltaUnhealthyNodesPercent()
```

##### `ResetMaxUpgradeDomainDeltaUnhealthyNodesPercent` <a name="ResetMaxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```csharp
private void ResetMaxUpgradeDomainDeltaUnhealthyNodesPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercentInput">MaxDeltaUnhealthyApplicationsPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercentInput">MaxDeltaUnhealthyNodesPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercentInput">MaxUpgradeDomainDeltaUnhealthyNodesPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercent">MaxDeltaUnhealthyApplicationsPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercent">MaxDeltaUnhealthyNodesPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercent">MaxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxDeltaUnhealthyApplicationsPercentInput`<sup>Optional</sup> <a name="MaxDeltaUnhealthyApplicationsPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercentInput"></a>

```csharp
public double MaxDeltaUnhealthyApplicationsPercentInput { get; }
```

- *Type:* double

---

##### `MaxDeltaUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="MaxDeltaUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercentInput"></a>

```csharp
public double MaxDeltaUnhealthyNodesPercentInput { get; }
```

- *Type:* double

---

##### `MaxUpgradeDomainDeltaUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="MaxUpgradeDomainDeltaUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercentInput"></a>

```csharp
public double MaxUpgradeDomainDeltaUnhealthyNodesPercentInput { get; }
```

- *Type:* double

---

##### `MaxDeltaUnhealthyApplicationsPercent`<sup>Required</sup> <a name="MaxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercent"></a>

```csharp
public double MaxDeltaUnhealthyApplicationsPercent { get; }
```

- *Type:* double

---

##### `MaxDeltaUnhealthyNodesPercent`<sup>Required</sup> <a name="MaxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercent"></a>

```csharp
public double MaxDeltaUnhealthyNodesPercent { get; }
```

- *Type:* double

---

##### `MaxUpgradeDomainDeltaUnhealthyNodesPercent`<sup>Required</sup> <a name="MaxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```csharp
public double MaxUpgradeDomainDeltaUnhealthyNodesPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterUpgradePolicyDeltaHealthPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---


### ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyApplicationsPercent">ResetMaxUnhealthyApplicationsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyNodesPercent">ResetMaxUnhealthyNodesPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxUnhealthyApplicationsPercent` <a name="ResetMaxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyApplicationsPercent"></a>

```csharp
private void ResetMaxUnhealthyApplicationsPercent()
```

##### `ResetMaxUnhealthyNodesPercent` <a name="ResetMaxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyNodesPercent"></a>

```csharp
private void ResetMaxUnhealthyNodesPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercentInput">MaxUnhealthyApplicationsPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercentInput">MaxUnhealthyNodesPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercent">MaxUnhealthyApplicationsPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercent">MaxUnhealthyNodesPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxUnhealthyApplicationsPercentInput`<sup>Optional</sup> <a name="MaxUnhealthyApplicationsPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercentInput"></a>

```csharp
public double MaxUnhealthyApplicationsPercentInput { get; }
```

- *Type:* double

---

##### `MaxUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="MaxUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercentInput"></a>

```csharp
public double MaxUnhealthyNodesPercentInput { get; }
```

- *Type:* double

---

##### `MaxUnhealthyApplicationsPercent`<sup>Required</sup> <a name="MaxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercent"></a>

```csharp
public double MaxUnhealthyApplicationsPercent { get; }
```

- *Type:* double

---

##### `MaxUnhealthyNodesPercent`<sup>Required</sup> <a name="MaxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercent"></a>

```csharp
public double MaxUnhealthyNodesPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterUpgradePolicyHealthPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---


### ServiceFabricClusterUpgradePolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServiceFabricClusterUpgradePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy">PutDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy">PutHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetDeltaHealthPolicy">ResetDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetForceRestartEnabled">ResetForceRestartEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckRetryTimeout">ResetHealthCheckRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckStableDuration">ResetHealthCheckStableDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckWaitDuration">ResetHealthCheckWaitDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthPolicy">ResetHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeDomainTimeout">ResetUpgradeDomainTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeReplicaSetCheckTimeout">ResetUpgradeReplicaSetCheckTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeTimeout">ResetUpgradeTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaHealthPolicy` <a name="PutDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy"></a>

```csharp
private void PutDeltaHealthPolicy(ServiceFabricClusterUpgradePolicyDeltaHealthPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---

##### `PutHealthPolicy` <a name="PutHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy"></a>

```csharp
private void PutHealthPolicy(ServiceFabricClusterUpgradePolicyHealthPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---

##### `ResetDeltaHealthPolicy` <a name="ResetDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetDeltaHealthPolicy"></a>

```csharp
private void ResetDeltaHealthPolicy()
```

##### `ResetForceRestartEnabled` <a name="ResetForceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetForceRestartEnabled"></a>

```csharp
private void ResetForceRestartEnabled()
```

##### `ResetHealthCheckRetryTimeout` <a name="ResetHealthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckRetryTimeout"></a>

```csharp
private void ResetHealthCheckRetryTimeout()
```

##### `ResetHealthCheckStableDuration` <a name="ResetHealthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckStableDuration"></a>

```csharp
private void ResetHealthCheckStableDuration()
```

##### `ResetHealthCheckWaitDuration` <a name="ResetHealthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckWaitDuration"></a>

```csharp
private void ResetHealthCheckWaitDuration()
```

##### `ResetHealthPolicy` <a name="ResetHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthPolicy"></a>

```csharp
private void ResetHealthPolicy()
```

##### `ResetUpgradeDomainTimeout` <a name="ResetUpgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeDomainTimeout"></a>

```csharp
private void ResetUpgradeDomainTimeout()
```

##### `ResetUpgradeReplicaSetCheckTimeout` <a name="ResetUpgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeReplicaSetCheckTimeout"></a>

```csharp
private void ResetUpgradeReplicaSetCheckTimeout()
```

##### `ResetUpgradeTimeout` <a name="ResetUpgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeTimeout"></a>

```csharp
private void ResetUpgradeTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicy">DeltaHealthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicy">HealthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicyInput">DeltaHealthPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabledInput">ForceRestartEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeoutInput">HealthCheckRetryTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDurationInput">HealthCheckStableDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDurationInput">HealthCheckWaitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicyInput">HealthPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeoutInput">UpgradeDomainTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeoutInput">UpgradeReplicaSetCheckTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeoutInput">UpgradeTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabled">ForceRestartEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeout">HealthCheckRetryTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDuration">HealthCheckStableDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDuration">HealthCheckWaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeout">UpgradeDomainTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeout">UpgradeReplicaSetCheckTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeout">UpgradeTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaHealthPolicy`<sup>Required</sup> <a name="DeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicy"></a>

```csharp
public ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference DeltaHealthPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference</a>

---

##### `HealthPolicy`<sup>Required</sup> <a name="HealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicy"></a>

```csharp
public ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference HealthPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference</a>

---

##### `DeltaHealthPolicyInput`<sup>Optional</sup> <a name="DeltaHealthPolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicyInput"></a>

```csharp
public ServiceFabricClusterUpgradePolicyDeltaHealthPolicy DeltaHealthPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---

##### `ForceRestartEnabledInput`<sup>Optional</sup> <a name="ForceRestartEnabledInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabledInput"></a>

```csharp
public object ForceRestartEnabledInput { get; }
```

- *Type:* object

---

##### `HealthCheckRetryTimeoutInput`<sup>Optional</sup> <a name="HealthCheckRetryTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeoutInput"></a>

```csharp
public string HealthCheckRetryTimeoutInput { get; }
```

- *Type:* string

---

##### `HealthCheckStableDurationInput`<sup>Optional</sup> <a name="HealthCheckStableDurationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDurationInput"></a>

```csharp
public string HealthCheckStableDurationInput { get; }
```

- *Type:* string

---

##### `HealthCheckWaitDurationInput`<sup>Optional</sup> <a name="HealthCheckWaitDurationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDurationInput"></a>

```csharp
public string HealthCheckWaitDurationInput { get; }
```

- *Type:* string

---

##### `HealthPolicyInput`<sup>Optional</sup> <a name="HealthPolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicyInput"></a>

```csharp
public ServiceFabricClusterUpgradePolicyHealthPolicy HealthPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---

##### `UpgradeDomainTimeoutInput`<sup>Optional</sup> <a name="UpgradeDomainTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeoutInput"></a>

```csharp
public string UpgradeDomainTimeoutInput { get; }
```

- *Type:* string

---

##### `UpgradeReplicaSetCheckTimeoutInput`<sup>Optional</sup> <a name="UpgradeReplicaSetCheckTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeoutInput"></a>

```csharp
public string UpgradeReplicaSetCheckTimeoutInput { get; }
```

- *Type:* string

---

##### `UpgradeTimeoutInput`<sup>Optional</sup> <a name="UpgradeTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeoutInput"></a>

```csharp
public string UpgradeTimeoutInput { get; }
```

- *Type:* string

---

##### `ForceRestartEnabled`<sup>Required</sup> <a name="ForceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabled"></a>

```csharp
public object ForceRestartEnabled { get; }
```

- *Type:* object

---

##### `HealthCheckRetryTimeout`<sup>Required</sup> <a name="HealthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeout"></a>

```csharp
public string HealthCheckRetryTimeout { get; }
```

- *Type:* string

---

##### `HealthCheckStableDuration`<sup>Required</sup> <a name="HealthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDuration"></a>

```csharp
public string HealthCheckStableDuration { get; }
```

- *Type:* string

---

##### `HealthCheckWaitDuration`<sup>Required</sup> <a name="HealthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDuration"></a>

```csharp
public string HealthCheckWaitDuration { get; }
```

- *Type:* string

---

##### `UpgradeDomainTimeout`<sup>Required</sup> <a name="UpgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeout"></a>

```csharp
public string UpgradeDomainTimeout { get; }
```

- *Type:* string

---

##### `UpgradeReplicaSetCheckTimeout`<sup>Required</sup> <a name="UpgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeout"></a>

```csharp
public string UpgradeReplicaSetCheckTimeout { get; }
```

- *Type:* string

---

##### `UpgradeTimeout`<sup>Required</sup> <a name="UpgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeout"></a>

```csharp
public string UpgradeTimeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.internalValue"></a>

```csharp
public ServiceFabricClusterUpgradePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---



