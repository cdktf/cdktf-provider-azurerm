# `azurerm_hdinsight_hadoop_cluster`

Refer to the Terraform Registory for docs: [`azurerm_hdinsight_hadoop_cluster`](https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster).

# `hdinsightHadoopCluster` Submodule <a name="`hdinsightHadoopCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightHadoopCluster <a name="HdinsightHadoopCluster" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster azurerm_hdinsight_hadoop_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopCluster(Construct Scope, string Id, HdinsightHadoopClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig">HdinsightHadoopClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig">HdinsightHadoopClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComponentVersion">PutComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComputeIsolation">PutComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putDiskEncryption">PutDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putGateway">PutGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMetastores">PutMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMonitor">PutMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile">PutSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2">PutStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetComputeIsolation">ResetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetMetastores">ResetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetSecurityProfile">ResetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetStorageAccountGen2">ResetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutComponentVersion` <a name="PutComponentVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComponentVersion"></a>

```csharp
private void PutComponentVersion(HdinsightHadoopClusterComponentVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a>

---

##### `PutComputeIsolation` <a name="PutComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComputeIsolation"></a>

```csharp
private void PutComputeIsolation(HdinsightHadoopClusterComputeIsolation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a>

---

##### `PutDiskEncryption` <a name="PutDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putDiskEncryption"></a>

```csharp
private void PutDiskEncryption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putDiskEncryption.parameter.value"></a>

- *Type:* object

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putExtension"></a>

```csharp
private void PutExtension(HdinsightHadoopClusterExtension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a>

---

##### `PutGateway` <a name="PutGateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putGateway"></a>

```csharp
private void PutGateway(HdinsightHadoopClusterGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a>

---

##### `PutMetastores` <a name="PutMetastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMetastores"></a>

```csharp
private void PutMetastores(HdinsightHadoopClusterMetastores Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a>

---

##### `PutMonitor` <a name="PutMonitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMonitor"></a>

```csharp
private void PutMonitor(HdinsightHadoopClusterMonitor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putNetwork"></a>

```csharp
private void PutNetwork(HdinsightHadoopClusterNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a>

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles"></a>

```csharp
private void PutRoles(HdinsightHadoopClusterRoles Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a>

---

##### `PutSecurityProfile` <a name="PutSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile"></a>

```csharp
private void PutSecurityProfile(HdinsightHadoopClusterSecurityProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccount"></a>

```csharp
private void PutStorageAccount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccount.parameter.value"></a>

- *Type:* object

---

##### `PutStorageAccountGen2` <a name="PutStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2"></a>

```csharp
private void PutStorageAccountGen2(HdinsightHadoopClusterStorageAccountGen2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(HdinsightHadoopClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a>

---

##### `ResetComputeIsolation` <a name="ResetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetComputeIsolation"></a>

```csharp
private void ResetComputeIsolation()
```

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetDiskEncryption"></a>

```csharp
private void ResetDiskEncryption()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastores` <a name="ResetMetastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetMetastores"></a>

```csharp
private void ResetMetastores()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetMonitor"></a>

```csharp
private void ResetMonitor()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetSecurityProfile` <a name="ResetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetSecurityProfile"></a>

```csharp
private void ResetSecurityProfile()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetStorageAccount"></a>

```csharp
private void ResetStorageAccount()
```

##### `ResetStorageAccountGen2` <a name="ResetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetStorageAccountGen2"></a>

```csharp
private void ResetStorageAccountGen2()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTlsMinVersion"></a>

```csharp
private void ResetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightHadoopCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightHadoopCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightHadoopCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.componentVersion">ComponentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference">HdinsightHadoopClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.computeIsolation">ComputeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference">HdinsightHadoopClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.diskEncryption">DiskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList">HdinsightHadoopClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference">HdinsightHadoopClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference">HdinsightHadoopClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.httpsEndpoint">HttpsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.metastores">Metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference">HdinsightHadoopClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference">HdinsightHadoopClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference">HdinsightHadoopClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference">HdinsightHadoopClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.securityProfile">SecurityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference">HdinsightHadoopClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.sshEndpoint">SshEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList">HdinsightHadoopClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountGen2">StorageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference">HdinsightHadoopClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference">HdinsightHadoopClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.componentVersionInput">ComponentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.computeIsolationInput">ComputeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.extensionInput">ExtensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.gatewayInput">GatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.metastoresInput">MetastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.monitorInput">MonitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.rolesInput">RolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.securityProfileInput">SecurityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountGen2Input">StorageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountInput">StorageAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.componentVersion"></a>

```csharp
public HdinsightHadoopClusterComponentVersionOutputReference ComponentVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference">HdinsightHadoopClusterComponentVersionOutputReference</a>

---

##### `ComputeIsolation`<sup>Required</sup> <a name="ComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.computeIsolation"></a>

```csharp
public HdinsightHadoopClusterComputeIsolationOutputReference ComputeIsolation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference">HdinsightHadoopClusterComputeIsolationOutputReference</a>

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.diskEncryption"></a>

```csharp
public HdinsightHadoopClusterDiskEncryptionList DiskEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList">HdinsightHadoopClusterDiskEncryptionList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.extension"></a>

```csharp
public HdinsightHadoopClusterExtensionOutputReference Extension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference">HdinsightHadoopClusterExtensionOutputReference</a>

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.gateway"></a>

```csharp
public HdinsightHadoopClusterGatewayOutputReference Gateway { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference">HdinsightHadoopClusterGatewayOutputReference</a>

---

##### `HttpsEndpoint`<sup>Required</sup> <a name="HttpsEndpoint" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.httpsEndpoint"></a>

```csharp
public string HttpsEndpoint { get; }
```

- *Type:* string

---

##### `Metastores`<sup>Required</sup> <a name="Metastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.metastores"></a>

```csharp
public HdinsightHadoopClusterMetastoresOutputReference Metastores { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference">HdinsightHadoopClusterMetastoresOutputReference</a>

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.monitor"></a>

```csharp
public HdinsightHadoopClusterMonitorOutputReference Monitor { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference">HdinsightHadoopClusterMonitorOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.network"></a>

```csharp
public HdinsightHadoopClusterNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference">HdinsightHadoopClusterNetworkOutputReference</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.roles"></a>

```csharp
public HdinsightHadoopClusterRolesOutputReference Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference">HdinsightHadoopClusterRolesOutputReference</a>

---

##### `SecurityProfile`<sup>Required</sup> <a name="SecurityProfile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.securityProfile"></a>

```csharp
public HdinsightHadoopClusterSecurityProfileOutputReference SecurityProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference">HdinsightHadoopClusterSecurityProfileOutputReference</a>

---

##### `SshEndpoint`<sup>Required</sup> <a name="SshEndpoint" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.sshEndpoint"></a>

```csharp
public string SshEndpoint { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccount"></a>

```csharp
public HdinsightHadoopClusterStorageAccountList StorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList">HdinsightHadoopClusterStorageAccountList</a>

---

##### `StorageAccountGen2`<sup>Required</sup> <a name="StorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountGen2"></a>

```csharp
public HdinsightHadoopClusterStorageAccountGen2OutputReference StorageAccountGen2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference">HdinsightHadoopClusterStorageAccountGen2OutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.timeouts"></a>

```csharp
public HdinsightHadoopClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference">HdinsightHadoopClusterTimeoutsOutputReference</a>

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `ComponentVersionInput`<sup>Optional</sup> <a name="ComponentVersionInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.componentVersionInput"></a>

```csharp
public HdinsightHadoopClusterComponentVersion ComponentVersionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a>

---

##### `ComputeIsolationInput`<sup>Optional</sup> <a name="ComputeIsolationInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.computeIsolationInput"></a>

```csharp
public HdinsightHadoopClusterComputeIsolation ComputeIsolationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a>

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.diskEncryptionInput"></a>

```csharp
public object DiskEncryptionInput { get; }
```

- *Type:* object

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.extensionInput"></a>

```csharp
public HdinsightHadoopClusterExtension ExtensionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.gatewayInput"></a>

```csharp
public HdinsightHadoopClusterGateway GatewayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetastoresInput`<sup>Optional</sup> <a name="MetastoresInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.metastoresInput"></a>

```csharp
public HdinsightHadoopClusterMetastores MetastoresInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a>

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.monitorInput"></a>

```csharp
public HdinsightHadoopClusterMonitor MonitorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.networkInput"></a>

```csharp
public HdinsightHadoopClusterNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.rolesInput"></a>

```csharp
public HdinsightHadoopClusterRoles RolesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a>

---

##### `SecurityProfileInput`<sup>Optional</sup> <a name="SecurityProfileInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.securityProfileInput"></a>

```csharp
public HdinsightHadoopClusterSecurityProfile SecurityProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a>

---

##### `StorageAccountGen2Input`<sup>Optional</sup> <a name="StorageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountGen2Input"></a>

```csharp
public HdinsightHadoopClusterStorageAccountGen2 StorageAccountGen2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a>

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountInput"></a>

```csharp
public object StorageAccountInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tlsMinVersionInput"></a>

```csharp
public string TlsMinVersionInput { get; }
```

- *Type:* string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightHadoopClusterComponentVersion <a name="HdinsightHadoopClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterComponentVersion {
    string Hadoop
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion.property.hadoop">Hadoop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#hadoop HdinsightHadoopCluster#hadoop}. |

---

##### `Hadoop`<sup>Required</sup> <a name="Hadoop" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion.property.hadoop"></a>

```csharp
public string Hadoop { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#hadoop HdinsightHadoopCluster#hadoop}.

---

### HdinsightHadoopClusterComputeIsolation <a name="HdinsightHadoopClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterComputeIsolation {
    object ComputeIsolationEnabled = null,
    string HostSku = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#compute_isolation_enabled HdinsightHadoopCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.property.hostSku">HostSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#host_sku HdinsightHadoopCluster#host_sku}. |

---

##### `ComputeIsolationEnabled`<sup>Optional</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.property.computeIsolationEnabled"></a>

```csharp
public object ComputeIsolationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#compute_isolation_enabled HdinsightHadoopCluster#compute_isolation_enabled}.

---

##### `HostSku`<sup>Optional</sup> <a name="HostSku" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.property.hostSku"></a>

```csharp
public string HostSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#host_sku HdinsightHadoopCluster#host_sku}.

---

### HdinsightHadoopClusterConfig <a name="HdinsightHadoopClusterConfig" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterVersion,
    HdinsightHadoopClusterComponentVersion ComponentVersion,
    HdinsightHadoopClusterGateway Gateway,
    string Location,
    string Name,
    string ResourceGroupName,
    HdinsightHadoopClusterRoles Roles,
    string Tier,
    HdinsightHadoopClusterComputeIsolation ComputeIsolation = null,
    object DiskEncryption = null,
    HdinsightHadoopClusterExtension Extension = null,
    string Id = null,
    HdinsightHadoopClusterMetastores Metastores = null,
    HdinsightHadoopClusterMonitor Monitor = null,
    HdinsightHadoopClusterNetwork Network = null,
    HdinsightHadoopClusterSecurityProfile SecurityProfile = null,
    object StorageAccount = null,
    HdinsightHadoopClusterStorageAccountGen2 StorageAccountGen2 = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    HdinsightHadoopClusterTimeouts Timeouts = null,
    string TlsMinVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#cluster_version HdinsightHadoopCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.componentVersion">ComponentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#location HdinsightHadoopCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#resource_group_name HdinsightHadoopCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tier">Tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#tier HdinsightHadoopCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.computeIsolation">ComputeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.diskEncryption">DiskEncryption</a></code> | <code>object</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#id HdinsightHadoopCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.metastores">Metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.securityProfile">SecurityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.storageAccount">StorageAccount</a></code> | <code>object</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.storageAccountGen2">StorageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#tags HdinsightHadoopCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#tls_min_version HdinsightHadoopCluster#tls_min_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#cluster_version HdinsightHadoopCluster#cluster_version}.

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.componentVersion"></a>

```csharp
public HdinsightHadoopClusterComponentVersion ComponentVersion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#component_version HdinsightHadoopCluster#component_version}

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.gateway"></a>

```csharp
public HdinsightHadoopClusterGateway Gateway { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#gateway HdinsightHadoopCluster#gateway}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#location HdinsightHadoopCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#resource_group_name HdinsightHadoopCluster#resource_group_name}.

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.roles"></a>

```csharp
public HdinsightHadoopClusterRoles Roles { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#roles HdinsightHadoopCluster#roles}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#tier HdinsightHadoopCluster#tier}.

---

##### `ComputeIsolation`<sup>Optional</sup> <a name="ComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.computeIsolation"></a>

```csharp
public HdinsightHadoopClusterComputeIsolation ComputeIsolation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#compute_isolation HdinsightHadoopCluster#compute_isolation}

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.diskEncryption"></a>

```csharp
public object DiskEncryption { get; set; }
```

- *Type:* object

disk_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#disk_encryption HdinsightHadoopCluster#disk_encryption}

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.extension"></a>

```csharp
public HdinsightHadoopClusterExtension Extension { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#extension HdinsightHadoopCluster#extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#id HdinsightHadoopCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metastores`<sup>Optional</sup> <a name="Metastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.metastores"></a>

```csharp
public HdinsightHadoopClusterMetastores Metastores { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#metastores HdinsightHadoopCluster#metastores}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.monitor"></a>

```csharp
public HdinsightHadoopClusterMonitor Monitor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#monitor HdinsightHadoopCluster#monitor}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.network"></a>

```csharp
public HdinsightHadoopClusterNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#network HdinsightHadoopCluster#network}

---

##### `SecurityProfile`<sup>Optional</sup> <a name="SecurityProfile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.securityProfile"></a>

```csharp
public HdinsightHadoopClusterSecurityProfile SecurityProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#security_profile HdinsightHadoopCluster#security_profile}

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.storageAccount"></a>

```csharp
public object StorageAccount { get; set; }
```

- *Type:* object

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_account HdinsightHadoopCluster#storage_account}

---

##### `StorageAccountGen2`<sup>Optional</sup> <a name="StorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.storageAccountGen2"></a>

```csharp
public HdinsightHadoopClusterStorageAccountGen2 StorageAccountGen2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_account_gen2 HdinsightHadoopCluster#storage_account_gen2}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#tags HdinsightHadoopCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.timeouts"></a>

```csharp
public HdinsightHadoopClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#timeouts HdinsightHadoopCluster#timeouts}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#tls_min_version HdinsightHadoopCluster#tls_min_version}.

---

### HdinsightHadoopClusterDiskEncryption <a name="HdinsightHadoopClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterDiskEncryption {
    string EncryptionAlgorithm = null,
    object EncryptionAtHostEnabled = null,
    string KeyVaultKeyId = null,
    string KeyVaultManagedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#encryption_algorithm HdinsightHadoopCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#encryption_at_host_enabled HdinsightHadoopCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#key_vault_key_id HdinsightHadoopCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.keyVaultManagedIdentityId">KeyVaultManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#key_vault_managed_identity_id HdinsightHadoopCluster#key_vault_managed_identity_id}. |

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#encryption_algorithm HdinsightHadoopCluster#encryption_algorithm}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#encryption_at_host_enabled HdinsightHadoopCluster#encryption_at_host_enabled}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#key_vault_key_id HdinsightHadoopCluster#key_vault_key_id}.

---

##### `KeyVaultManagedIdentityId`<sup>Optional</sup> <a name="KeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```csharp
public string KeyVaultManagedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#key_vault_managed_identity_id HdinsightHadoopCluster#key_vault_managed_identity_id}.

---

### HdinsightHadoopClusterExtension <a name="HdinsightHadoopClusterExtension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterExtension {
    string LogAnalyticsWorkspaceId,
    string PrimaryKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}. |

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}.

---

### HdinsightHadoopClusterGateway <a name="HdinsightHadoopClusterGateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterGateway {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

### HdinsightHadoopClusterMetastores <a name="HdinsightHadoopClusterMetastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMetastores {
    HdinsightHadoopClusterMetastoresAmbari Ambari = null,
    HdinsightHadoopClusterMetastoresHive Hive = null,
    HdinsightHadoopClusterMetastoresOozie Oozie = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.ambari">Ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.hive">Hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.oozie">Oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a></code> | oozie block. |

---

##### `Ambari`<sup>Optional</sup> <a name="Ambari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.ambari"></a>

```csharp
public HdinsightHadoopClusterMetastoresAmbari Ambari { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ambari HdinsightHadoopCluster#ambari}

---

##### `Hive`<sup>Optional</sup> <a name="Hive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.hive"></a>

```csharp
public HdinsightHadoopClusterMetastoresHive Hive { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#hive HdinsightHadoopCluster#hive}

---

##### `Oozie`<sup>Optional</sup> <a name="Oozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.oozie"></a>

```csharp
public HdinsightHadoopClusterMetastoresOozie Oozie { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#oozie HdinsightHadoopCluster#oozie}

---

### HdinsightHadoopClusterMetastoresAmbari <a name="HdinsightHadoopClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMetastoresAmbari {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

### HdinsightHadoopClusterMetastoresHive <a name="HdinsightHadoopClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMetastoresHive {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

### HdinsightHadoopClusterMetastoresOozie <a name="HdinsightHadoopClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMetastoresOozie {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

### HdinsightHadoopClusterMonitor <a name="HdinsightHadoopClusterMonitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMonitor {
    string LogAnalyticsWorkspaceId,
    string PrimaryKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}. |

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}.

---

### HdinsightHadoopClusterNetwork <a name="HdinsightHadoopClusterNetwork" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterNetwork {
    string ConnectionDirection = null,
    object PrivateLinkEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.property.connectionDirection">ConnectionDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#connection_direction HdinsightHadoopCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.property.privateLinkEnabled">PrivateLinkEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#private_link_enabled HdinsightHadoopCluster#private_link_enabled}. |

---

##### `ConnectionDirection`<sup>Optional</sup> <a name="ConnectionDirection" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.property.connectionDirection"></a>

```csharp
public string ConnectionDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#connection_direction HdinsightHadoopCluster#connection_direction}.

---

##### `PrivateLinkEnabled`<sup>Optional</sup> <a name="PrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.property.privateLinkEnabled"></a>

```csharp
public object PrivateLinkEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#private_link_enabled HdinsightHadoopCluster#private_link_enabled}.

---

### HdinsightHadoopClusterRoles <a name="HdinsightHadoopClusterRoles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRoles {
    HdinsightHadoopClusterRolesHeadNode HeadNode,
    HdinsightHadoopClusterRolesWorkerNode WorkerNode,
    HdinsightHadoopClusterRolesZookeeperNode ZookeeperNode,
    HdinsightHadoopClusterRolesEdgeNode EdgeNode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.headNode">HeadNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.workerNode">WorkerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.zookeeperNode">ZookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a></code> | zookeeper_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.edgeNode">EdgeNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a></code> | edge_node block. |

---

##### `HeadNode`<sup>Required</sup> <a name="HeadNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.headNode"></a>

```csharp
public HdinsightHadoopClusterRolesHeadNode HeadNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#head_node HdinsightHadoopCluster#head_node}

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.workerNode"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNode WorkerNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#worker_node HdinsightHadoopCluster#worker_node}

---

##### `ZookeeperNode`<sup>Required</sup> <a name="ZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.zookeeperNode"></a>

```csharp
public HdinsightHadoopClusterRolesZookeeperNode ZookeeperNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#zookeeper_node HdinsightHadoopCluster#zookeeper_node}

---

##### `EdgeNode`<sup>Optional</sup> <a name="EdgeNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.edgeNode"></a>

```csharp
public HdinsightHadoopClusterRolesEdgeNode EdgeNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a>

edge_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#edge_node HdinsightHadoopCluster#edge_node}

---

### HdinsightHadoopClusterRolesEdgeNode <a name="HdinsightHadoopClusterRolesEdgeNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNode {
    object InstallScriptAction,
    double TargetInstanceCount,
    string VmSize,
    object HttpsEndpoints = null,
    object UninstallScriptActions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.installScriptAction">InstallScriptAction</a></code> | <code>object</code> | install_script_action block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.httpsEndpoints">HttpsEndpoints</a></code> | <code>object</code> | https_endpoints block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.uninstallScriptActions">UninstallScriptActions</a></code> | <code>object</code> | uninstall_script_actions block. |

---

##### `InstallScriptAction`<sup>Required</sup> <a name="InstallScriptAction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.installScriptAction"></a>

```csharp
public object InstallScriptAction { get; set; }
```

- *Type:* object

install_script_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#install_script_action HdinsightHadoopCluster#install_script_action}

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

##### `HttpsEndpoints`<sup>Optional</sup> <a name="HttpsEndpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.httpsEndpoints"></a>

```csharp
public object HttpsEndpoints { get; set; }
```

- *Type:* object

https_endpoints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#https_endpoints HdinsightHadoopCluster#https_endpoints}

---

##### `UninstallScriptActions`<sup>Optional</sup> <a name="UninstallScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.uninstallScriptActions"></a>

```csharp
public object UninstallScriptActions { get; set; }
```

- *Type:* object

uninstall_script_actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uninstall_script_actions HdinsightHadoopCluster#uninstall_script_actions}

---

### HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints <a name="HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints {
    string[] AccessModes = null,
    double DestinationPort = null,
    object DisableGatewayAuth = null,
    string PrivateIpAddress = null,
    string SubDomainSuffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.accessModes">AccessModes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#access_modes HdinsightHadoopCluster#access_modes}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.destinationPort">DestinationPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#destination_port HdinsightHadoopCluster#destination_port}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.disableGatewayAuth">DisableGatewayAuth</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#disable_gateway_auth HdinsightHadoopCluster#disable_gateway_auth}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#private_ip_address HdinsightHadoopCluster#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.subDomainSuffix">SubDomainSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#sub_domain_suffix HdinsightHadoopCluster#sub_domain_suffix}. |

---

##### `AccessModes`<sup>Optional</sup> <a name="AccessModes" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.accessModes"></a>

```csharp
public string[] AccessModes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#access_modes HdinsightHadoopCluster#access_modes}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.destinationPort"></a>

```csharp
public double DestinationPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#destination_port HdinsightHadoopCluster#destination_port}.

---

##### `DisableGatewayAuth`<sup>Optional</sup> <a name="DisableGatewayAuth" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.disableGatewayAuth"></a>

```csharp
public object DisableGatewayAuth { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#disable_gateway_auth HdinsightHadoopCluster#disable_gateway_auth}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#private_ip_address HdinsightHadoopCluster#private_ip_address}.

---

##### `SubDomainSuffix`<sup>Optional</sup> <a name="SubDomainSuffix" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.subDomainSuffix"></a>

```csharp
public string SubDomainSuffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#sub_domain_suffix HdinsightHadoopCluster#sub_domain_suffix}.

---

### HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction <a name="HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions <a name="HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterRolesHeadNode <a name="HdinsightHadoopClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesHeadNode {
    string Username,
    string VmSize,
    string Password = null,
    object ScriptActions = null,
    string[] SshKeys = null,
    string SubnetId = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

### HdinsightHadoopClusterRolesHeadNodeScriptActions <a name="HdinsightHadoopClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesHeadNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterRolesWorkerNode <a name="HdinsightHadoopClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNode {
    double TargetInstanceCount,
    string Username,
    string VmSize,
    HdinsightHadoopClusterRolesWorkerNodeAutoscale Autoscale = null,
    string Password = null,
    object ScriptActions = null,
    string[] SshKeys = null,
    string SubnetId = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}. |

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.autoscale"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscale Autoscale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#autoscale HdinsightHadoopCluster#autoscale}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

### HdinsightHadoopClusterRolesWorkerNodeAutoscale <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscale {
    HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity Capacity = null,
    HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence Recurrence = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.property.capacity"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity Capacity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#capacity HdinsightHadoopCluster#capacity}

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence Recurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#recurrence HdinsightHadoopCluster#recurrence}

---

### HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity {
    double MaxInstanceCount,
    double MinInstanceCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#max_instance_count HdinsightHadoopCluster#max_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#min_instance_count HdinsightHadoopCluster#min_instance_count}. |

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#max_instance_count HdinsightHadoopCluster#max_instance_count}.

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#min_instance_count HdinsightHadoopCluster#min_instance_count}.

---

### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence {
    object Schedule,
    string Timezone
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">Schedule</a></code> | <code>object</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#timezone HdinsightHadoopCluster#timezone}. |

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```csharp
public object Schedule { get; set; }
```

- *Type:* object

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#schedule HdinsightHadoopCluster#schedule}

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#timezone HdinsightHadoopCluster#timezone}.

---

### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule {
    string[] Days,
    double TargetInstanceCount,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">Days</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#days HdinsightHadoopCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#time HdinsightHadoopCluster#time}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```csharp
public string[] Days { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#days HdinsightHadoopCluster#days}.

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#time HdinsightHadoopCluster#time}.

---

### HdinsightHadoopClusterRolesWorkerNodeScriptActions <a name="HdinsightHadoopClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterRolesZookeeperNode <a name="HdinsightHadoopClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesZookeeperNode {
    string Username,
    string VmSize,
    string Password = null,
    object ScriptActions = null,
    string[] SshKeys = null,
    string SubnetId = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

### HdinsightHadoopClusterRolesZookeeperNodeScriptActions <a name="HdinsightHadoopClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesZookeeperNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterSecurityProfile <a name="HdinsightHadoopClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterSecurityProfile {
    string AaddsResourceId,
    string DomainName,
    string DomainUsername,
    string DomainUserPassword,
    string[] LdapsUrls,
    string MsiResourceId,
    string[] ClusterUsersGroupDns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.aaddsResourceId">AaddsResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#aadds_resource_id HdinsightHadoopCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#domain_name HdinsightHadoopCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainUsername">DomainUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#domain_username HdinsightHadoopCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainUserPassword">DomainUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#domain_user_password HdinsightHadoopCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.ldapsUrls">LdapsUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ldaps_urls HdinsightHadoopCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.msiResourceId">MsiResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#msi_resource_id HdinsightHadoopCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.clusterUsersGroupDns">ClusterUsersGroupDns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#cluster_users_group_dns HdinsightHadoopCluster#cluster_users_group_dns}. |

---

##### `AaddsResourceId`<sup>Required</sup> <a name="AaddsResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.aaddsResourceId"></a>

```csharp
public string AaddsResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#aadds_resource_id HdinsightHadoopCluster#aadds_resource_id}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#domain_name HdinsightHadoopCluster#domain_name}.

---

##### `DomainUsername`<sup>Required</sup> <a name="DomainUsername" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainUsername"></a>

```csharp
public string DomainUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#domain_username HdinsightHadoopCluster#domain_username}.

---

##### `DomainUserPassword`<sup>Required</sup> <a name="DomainUserPassword" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainUserPassword"></a>

```csharp
public string DomainUserPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#domain_user_password HdinsightHadoopCluster#domain_user_password}.

---

##### `LdapsUrls`<sup>Required</sup> <a name="LdapsUrls" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.ldapsUrls"></a>

```csharp
public string[] LdapsUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#ldaps_urls HdinsightHadoopCluster#ldaps_urls}.

---

##### `MsiResourceId`<sup>Required</sup> <a name="MsiResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.msiResourceId"></a>

```csharp
public string MsiResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#msi_resource_id HdinsightHadoopCluster#msi_resource_id}.

---

##### `ClusterUsersGroupDns`<sup>Optional</sup> <a name="ClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```csharp
public string[] ClusterUsersGroupDns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#cluster_users_group_dns HdinsightHadoopCluster#cluster_users_group_dns}.

---

### HdinsightHadoopClusterStorageAccount <a name="HdinsightHadoopClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterStorageAccount {
    object IsDefault,
    string StorageAccountKey,
    string StorageContainerId,
    string StorageResourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_account_key HdinsightHadoopCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_container_id HdinsightHadoopCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}. |

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}.

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_account_key HdinsightHadoopCluster#storage_account_key}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_container_id HdinsightHadoopCluster#storage_container_id}.

---

##### `StorageResourceId`<sup>Optional</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}.

---

### HdinsightHadoopClusterStorageAccountGen2 <a name="HdinsightHadoopClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterStorageAccountGen2 {
    string FilesystemId,
    object IsDefault,
    string ManagedIdentityResourceId,
    string StorageResourceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.filesystemId">FilesystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#filesystem_id HdinsightHadoopCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#managed_identity_resource_id HdinsightHadoopCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}. |

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.filesystemId"></a>

```csharp
public string FilesystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#filesystem_id HdinsightHadoopCluster#filesystem_id}.

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}.

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```csharp
public string ManagedIdentityResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#managed_identity_resource_id HdinsightHadoopCluster#managed_identity_resource_id}.

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}.

---

### HdinsightHadoopClusterTimeouts <a name="HdinsightHadoopClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#create HdinsightHadoopCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#delete HdinsightHadoopCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#read HdinsightHadoopCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#update HdinsightHadoopCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#create HdinsightHadoopCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#delete HdinsightHadoopCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#read HdinsightHadoopCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster#update HdinsightHadoopCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightHadoopClusterComponentVersionOutputReference <a name="HdinsightHadoopClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterComponentVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.hadoopInput">HadoopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.hadoop">Hadoop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HadoopInput`<sup>Optional</sup> <a name="HadoopInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.hadoopInput"></a>

```csharp
public string HadoopInput { get; }
```

- *Type:* string

---

##### `Hadoop`<sup>Required</sup> <a name="Hadoop" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.hadoop"></a>

```csharp
public string Hadoop { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterComponentVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a>

---


### HdinsightHadoopClusterComputeIsolationOutputReference <a name="HdinsightHadoopClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterComputeIsolationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">ResetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resetHostSku">ResetHostSku</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeIsolationEnabled` <a name="ResetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```csharp
private void ResetComputeIsolationEnabled()
```

##### `ResetHostSku` <a name="ResetHostSku" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resetHostSku"></a>

```csharp
private void ResetHostSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">ComputeIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.hostSkuInput">HostSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.hostSku">HostSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeIsolationEnabledInput`<sup>Optional</sup> <a name="ComputeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```csharp
public object ComputeIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `HostSkuInput`<sup>Optional</sup> <a name="HostSkuInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```csharp
public string HostSkuInput { get; }
```

- *Type:* string

---

##### `ComputeIsolationEnabled`<sup>Required</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```csharp
public object ComputeIsolationEnabled { get; }
```

- *Type:* object

---

##### `HostSku`<sup>Required</sup> <a name="HostSku" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.hostSku"></a>

```csharp
public string HostSku { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterComputeIsolation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a>

---


### HdinsightHadoopClusterDiskEncryptionList <a name="HdinsightHadoopClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterDiskEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.get"></a>

```csharp
private HdinsightHadoopClusterDiskEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterDiskEncryptionOutputReference <a name="HdinsightHadoopClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterDiskEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">ResetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```csharp
private void ResetEncryptionAtHostEnabled()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetKeyVaultManagedIdentityId` <a name="ResetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```csharp
private void ResetKeyVaultManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">KeyVaultManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">KeyVaultManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```csharp
public object EncryptionAtHostEnabledInput { get; }
```

- *Type:* object

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="KeyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```csharp
public string KeyVaultManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; }
```

- *Type:* object

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `KeyVaultManagedIdentityId`<sup>Required</sup> <a name="KeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```csharp
public string KeyVaultManagedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterExtensionOutputReference <a name="HdinsightHadoopClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterExtensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterExtension InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a>

---


### HdinsightHadoopClusterGatewayOutputReference <a name="HdinsightHadoopClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a>

---


### HdinsightHadoopClusterMetastoresAmbariOutputReference <a name="HdinsightHadoopClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMetastoresAmbariOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterMetastoresAmbari InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a>

---


### HdinsightHadoopClusterMetastoresHiveOutputReference <a name="HdinsightHadoopClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMetastoresHiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterMetastoresHive InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a>

---


### HdinsightHadoopClusterMetastoresOozieOutputReference <a name="HdinsightHadoopClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMetastoresOozieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterMetastoresOozie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a>

---


### HdinsightHadoopClusterMetastoresOutputReference <a name="HdinsightHadoopClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMetastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari">PutAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive">PutHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie">PutOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetAmbari">ResetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetHive">ResetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetOozie">ResetOozie</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmbari` <a name="PutAmbari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari"></a>

```csharp
private void PutAmbari(HdinsightHadoopClusterMetastoresAmbari Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a>

---

##### `PutHive` <a name="PutHive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive"></a>

```csharp
private void PutHive(HdinsightHadoopClusterMetastoresHive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a>

---

##### `PutOozie` <a name="PutOozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie"></a>

```csharp
private void PutOozie(HdinsightHadoopClusterMetastoresOozie Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a>

---

##### `ResetAmbari` <a name="ResetAmbari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetAmbari"></a>

```csharp
private void ResetAmbari()
```

##### `ResetHive` <a name="ResetHive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetHive"></a>

```csharp
private void ResetHive()
```

##### `ResetOozie` <a name="ResetOozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetOozie"></a>

```csharp
private void ResetOozie()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.ambari">Ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference">HdinsightHadoopClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.hive">Hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference">HdinsightHadoopClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.oozie">Oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference">HdinsightHadoopClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.ambariInput">AmbariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.hiveInput">HiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.oozieInput">OozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ambari`<sup>Required</sup> <a name="Ambari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.ambari"></a>

```csharp
public HdinsightHadoopClusterMetastoresAmbariOutputReference Ambari { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference">HdinsightHadoopClusterMetastoresAmbariOutputReference</a>

---

##### `Hive`<sup>Required</sup> <a name="Hive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.hive"></a>

```csharp
public HdinsightHadoopClusterMetastoresHiveOutputReference Hive { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference">HdinsightHadoopClusterMetastoresHiveOutputReference</a>

---

##### `Oozie`<sup>Required</sup> <a name="Oozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.oozie"></a>

```csharp
public HdinsightHadoopClusterMetastoresOozieOutputReference Oozie { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference">HdinsightHadoopClusterMetastoresOozieOutputReference</a>

---

##### `AmbariInput`<sup>Optional</sup> <a name="AmbariInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.ambariInput"></a>

```csharp
public HdinsightHadoopClusterMetastoresAmbari AmbariInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a>

---

##### `HiveInput`<sup>Optional</sup> <a name="HiveInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.hiveInput"></a>

```csharp
public HdinsightHadoopClusterMetastoresHive HiveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a>

---

##### `OozieInput`<sup>Optional</sup> <a name="OozieInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.oozieInput"></a>

```csharp
public HdinsightHadoopClusterMetastoresOozie OozieInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterMetastores InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a>

---


### HdinsightHadoopClusterMonitorOutputReference <a name="HdinsightHadoopClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterMonitorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterMonitor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a>

---


### HdinsightHadoopClusterNetworkOutputReference <a name="HdinsightHadoopClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resetConnectionDirection">ResetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resetPrivateLinkEnabled">ResetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionDirection` <a name="ResetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resetConnectionDirection"></a>

```csharp
private void ResetConnectionDirection()
```

##### `ResetPrivateLinkEnabled` <a name="ResetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```csharp
private void ResetPrivateLinkEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.connectionDirectionInput">ConnectionDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.privateLinkEnabledInput">PrivateLinkEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.connectionDirection">ConnectionDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.privateLinkEnabled">PrivateLinkEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionDirectionInput`<sup>Optional</sup> <a name="ConnectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```csharp
public string ConnectionDirectionInput { get; }
```

- *Type:* string

---

##### `PrivateLinkEnabledInput`<sup>Optional</sup> <a name="PrivateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```csharp
public object PrivateLinkEnabledInput { get; }
```

- *Type:* object

---

##### `ConnectionDirection`<sup>Required</sup> <a name="ConnectionDirection" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.connectionDirection"></a>

```csharp
public string ConnectionDirection { get; }
```

- *Type:* string

---

##### `PrivateLinkEnabled`<sup>Required</sup> <a name="PrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```csharp
public object PrivateLinkEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a>

---


### HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList <a name="HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.get"></a>

```csharp
private HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference <a name="HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetAccessModes">ResetAccessModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetDisableGatewayAuth">ResetDisableGatewayAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetSubDomainSuffix">ResetSubDomainSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessModes` <a name="ResetAccessModes" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetAccessModes"></a>

```csharp
private void ResetAccessModes()
```

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetDestinationPort"></a>

```csharp
private void ResetDestinationPort()
```

##### `ResetDisableGatewayAuth` <a name="ResetDisableGatewayAuth" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetDisableGatewayAuth"></a>

```csharp
private void ResetDisableGatewayAuth()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetSubDomainSuffix` <a name="ResetSubDomainSuffix" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetSubDomainSuffix"></a>

```csharp
private void ResetSubDomainSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.accessModesInput">AccessModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.disableGatewayAuthInput">DisableGatewayAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.subDomainSuffixInput">SubDomainSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.accessModes">AccessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.disableGatewayAuth">DisableGatewayAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.subDomainSuffix">SubDomainSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessModesInput`<sup>Optional</sup> <a name="AccessModesInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.accessModesInput"></a>

```csharp
public string[] AccessModesInput { get; }
```

- *Type:* string[]

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.destinationPortInput"></a>

```csharp
public double DestinationPortInput { get; }
```

- *Type:* double

---

##### `DisableGatewayAuthInput`<sup>Optional</sup> <a name="DisableGatewayAuthInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.disableGatewayAuthInput"></a>

```csharp
public object DisableGatewayAuthInput { get; }
```

- *Type:* object

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `SubDomainSuffixInput`<sup>Optional</sup> <a name="SubDomainSuffixInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.subDomainSuffixInput"></a>

```csharp
public string SubDomainSuffixInput { get; }
```

- *Type:* string

---

##### `AccessModes`<sup>Required</sup> <a name="AccessModes" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.accessModes"></a>

```csharp
public string[] AccessModes { get; }
```

- *Type:* string[]

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `DisableGatewayAuth`<sup>Required</sup> <a name="DisableGatewayAuth" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.disableGatewayAuth"></a>

```csharp
public object DisableGatewayAuth { get; }
```

- *Type:* object

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `SubDomainSuffix`<sup>Required</sup> <a name="SubDomainSuffix" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.subDomainSuffix"></a>

```csharp
public string SubDomainSuffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList <a name="HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.get"></a>

```csharp
private HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference <a name="HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesEdgeNodeOutputReference <a name="HdinsightHadoopClusterRolesEdgeNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putHttpsEndpoints">PutHttpsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putInstallScriptAction">PutInstallScriptAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putUninstallScriptActions">PutUninstallScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resetHttpsEndpoints">ResetHttpsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resetUninstallScriptActions">ResetUninstallScriptActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpsEndpoints` <a name="PutHttpsEndpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putHttpsEndpoints"></a>

```csharp
private void PutHttpsEndpoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putHttpsEndpoints.parameter.value"></a>

- *Type:* object

---

##### `PutInstallScriptAction` <a name="PutInstallScriptAction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putInstallScriptAction"></a>

```csharp
private void PutInstallScriptAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putInstallScriptAction.parameter.value"></a>

- *Type:* object

---

##### `PutUninstallScriptActions` <a name="PutUninstallScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putUninstallScriptActions"></a>

```csharp
private void PutUninstallScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putUninstallScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetHttpsEndpoints` <a name="ResetHttpsEndpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resetHttpsEndpoints"></a>

```csharp
private void ResetHttpsEndpoints()
```

##### `ResetUninstallScriptActions` <a name="ResetUninstallScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resetUninstallScriptActions"></a>

```csharp
private void ResetUninstallScriptActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.httpsEndpoints">HttpsEndpoints</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.installScriptAction">InstallScriptAction</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList">HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.uninstallScriptActions">UninstallScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.httpsEndpointsInput">HttpsEndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.installScriptActionInput">InstallScriptActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.targetInstanceCountInput">TargetInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.uninstallScriptActionsInput">UninstallScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpsEndpoints`<sup>Required</sup> <a name="HttpsEndpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.httpsEndpoints"></a>

```csharp
public HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList HttpsEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList</a>

---

##### `InstallScriptAction`<sup>Required</sup> <a name="InstallScriptAction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.installScriptAction"></a>

```csharp
public HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList InstallScriptAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList">HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList</a>

---

##### `UninstallScriptActions`<sup>Required</sup> <a name="UninstallScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.uninstallScriptActions"></a>

```csharp
public HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList UninstallScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList</a>

---

##### `HttpsEndpointsInput`<sup>Optional</sup> <a name="HttpsEndpointsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.httpsEndpointsInput"></a>

```csharp
public object HttpsEndpointsInput { get; }
```

- *Type:* object

---

##### `InstallScriptActionInput`<sup>Optional</sup> <a name="InstallScriptActionInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.installScriptActionInput"></a>

```csharp
public object InstallScriptActionInput { get; }
```

- *Type:* object

---

##### `TargetInstanceCountInput`<sup>Optional</sup> <a name="TargetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.targetInstanceCountInput"></a>

```csharp
public double TargetInstanceCountInput { get; }
```

- *Type:* double

---

##### `UninstallScriptActionsInput`<sup>Optional</sup> <a name="UninstallScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.uninstallScriptActionsInput"></a>

```csharp
public object UninstallScriptActionsInput { get; }
```

- *Type:* object

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; }
```

- *Type:* double

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterRolesEdgeNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a>

---


### HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList <a name="HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.get"></a>

```csharp
private HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference <a name="HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesHeadNodeOutputReference <a name="HdinsightHadoopClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesHeadNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList">HdinsightHadoopClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightHadoopClusterRolesHeadNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList">HdinsightHadoopClusterRolesHeadNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterRolesHeadNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a>

---


### HdinsightHadoopClusterRolesHeadNodeScriptActionsList <a name="HdinsightHadoopClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesHeadNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.get"></a>

```csharp
private HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesOutputReference <a name="HdinsightHadoopClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode">PutEdgeNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode">PutHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode">PutWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode">PutZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resetEdgeNode">ResetEdgeNode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEdgeNode` <a name="PutEdgeNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode"></a>

```csharp
private void PutEdgeNode(HdinsightHadoopClusterRolesEdgeNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a>

---

##### `PutHeadNode` <a name="PutHeadNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode"></a>

```csharp
private void PutHeadNode(HdinsightHadoopClusterRolesHeadNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a>

---

##### `PutWorkerNode` <a name="PutWorkerNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode"></a>

```csharp
private void PutWorkerNode(HdinsightHadoopClusterRolesWorkerNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a>

---

##### `PutZookeeperNode` <a name="PutZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode"></a>

```csharp
private void PutZookeeperNode(HdinsightHadoopClusterRolesZookeeperNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a>

---

##### `ResetEdgeNode` <a name="ResetEdgeNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resetEdgeNode"></a>

```csharp
private void ResetEdgeNode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.edgeNode">EdgeNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference">HdinsightHadoopClusterRolesEdgeNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.headNode">HeadNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference">HdinsightHadoopClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.workerNode">WorkerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference">HdinsightHadoopClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.zookeeperNode">ZookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference">HdinsightHadoopClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.edgeNodeInput">EdgeNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.headNodeInput">HeadNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.workerNodeInput">WorkerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.zookeeperNodeInput">ZookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EdgeNode`<sup>Required</sup> <a name="EdgeNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.edgeNode"></a>

```csharp
public HdinsightHadoopClusterRolesEdgeNodeOutputReference EdgeNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference">HdinsightHadoopClusterRolesEdgeNodeOutputReference</a>

---

##### `HeadNode`<sup>Required</sup> <a name="HeadNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.headNode"></a>

```csharp
public HdinsightHadoopClusterRolesHeadNodeOutputReference HeadNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference">HdinsightHadoopClusterRolesHeadNodeOutputReference</a>

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.workerNode"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeOutputReference WorkerNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference">HdinsightHadoopClusterRolesWorkerNodeOutputReference</a>

---

##### `ZookeeperNode`<sup>Required</sup> <a name="ZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.zookeeperNode"></a>

```csharp
public HdinsightHadoopClusterRolesZookeeperNodeOutputReference ZookeeperNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference">HdinsightHadoopClusterRolesZookeeperNodeOutputReference</a>

---

##### `EdgeNodeInput`<sup>Optional</sup> <a name="EdgeNodeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.edgeNodeInput"></a>

```csharp
public HdinsightHadoopClusterRolesEdgeNode EdgeNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a>

---

##### `HeadNodeInput`<sup>Optional</sup> <a name="HeadNodeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.headNodeInput"></a>

```csharp
public HdinsightHadoopClusterRolesHeadNode HeadNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a>

---

##### `WorkerNodeInput`<sup>Optional</sup> <a name="WorkerNodeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.workerNodeInput"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNode WorkerNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a>

---

##### `ZookeeperNodeInput`<sup>Optional</sup> <a name="ZookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```csharp
public HdinsightHadoopClusterRolesZookeeperNode ZookeeperNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a>

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCountInput"></a>

```csharp
public double MaxInstanceCountInput { get; }
```

- *Type:* double

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCountInput"></a>

```csharp
public double MinInstanceCountInput { get; }
```

- *Type:* double

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a>

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity"></a>

```csharp
private void PutCapacity(HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a>

---

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```csharp
private void PutRecurrence(HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.capacity"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference</a>

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.capacityInput"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity CapacityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence RecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```csharp
public object ScheduleInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```csharp
private HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">DaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">TargetInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">Days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```csharp
public string[] DaysInput { get; }
```

- *Type:* string[]

---

##### `TargetInstanceCountInput`<sup>Optional</sup> <a name="TargetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```csharp
public double TargetInstanceCountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```csharp
public string[] Days { get; }
```

- *Type:* string[]

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesWorkerNodeOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```csharp
private void PutAutoscale(HdinsightHadoopClusterRolesWorkerNodeAutoscale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a>

---

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```csharp
private void ResetAutoscale()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList">HdinsightHadoopClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">TargetInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference Autoscale { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList">HdinsightHadoopClusterRolesWorkerNodeScriptActionsList</a>

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNodeAutoscale AutoscaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TargetInstanceCountInput`<sup>Optional</sup> <a name="TargetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```csharp
public double TargetInstanceCountInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterRolesWorkerNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a>

---


### HdinsightHadoopClusterRolesWorkerNodeScriptActionsList <a name="HdinsightHadoopClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.get"></a>

```csharp
private HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesZookeeperNodeOutputReference <a name="HdinsightHadoopClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesZookeeperNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList">HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList">HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterRolesZookeeperNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a>

---


### HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.get"></a>

```csharp
private HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterSecurityProfileOutputReference <a name="HdinsightHadoopClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterSecurityProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">ResetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterUsersGroupDns` <a name="ResetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```csharp
private void ResetClusterUsersGroupDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">AaddsResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">ClusterUsersGroupDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUsernameInput">DomainUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUserPasswordInput">DomainUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.ldapsUrlsInput">LdapsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.msiResourceIdInput">MsiResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.aaddsResourceId">AaddsResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">ClusterUsersGroupDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUsername">DomainUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUserPassword">DomainUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.ldapsUrls">LdapsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.msiResourceId">MsiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AaddsResourceIdInput`<sup>Optional</sup> <a name="AaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```csharp
public string AaddsResourceIdInput { get; }
```

- *Type:* string

---

##### `ClusterUsersGroupDnsInput`<sup>Optional</sup> <a name="ClusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```csharp
public string[] ClusterUsersGroupDnsInput { get; }
```

- *Type:* string[]

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `DomainUsernameInput`<sup>Optional</sup> <a name="DomainUsernameInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```csharp
public string DomainUsernameInput { get; }
```

- *Type:* string

---

##### `DomainUserPasswordInput`<sup>Optional</sup> <a name="DomainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```csharp
public string DomainUserPasswordInput { get; }
```

- *Type:* string

---

##### `LdapsUrlsInput`<sup>Optional</sup> <a name="LdapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```csharp
public string[] LdapsUrlsInput { get; }
```

- *Type:* string[]

---

##### `MsiResourceIdInput`<sup>Optional</sup> <a name="MsiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```csharp
public string MsiResourceIdInput { get; }
```

- *Type:* string

---

##### `AaddsResourceId`<sup>Required</sup> <a name="AaddsResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```csharp
public string AaddsResourceId { get; }
```

- *Type:* string

---

##### `ClusterUsersGroupDns`<sup>Required</sup> <a name="ClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```csharp
public string[] ClusterUsersGroupDns { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainUsername`<sup>Required</sup> <a name="DomainUsername" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUsername"></a>

```csharp
public string DomainUsername { get; }
```

- *Type:* string

---

##### `DomainUserPassword`<sup>Required</sup> <a name="DomainUserPassword" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```csharp
public string DomainUserPassword { get; }
```

- *Type:* string

---

##### `LdapsUrls`<sup>Required</sup> <a name="LdapsUrls" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```csharp
public string[] LdapsUrls { get; }
```

- *Type:* string[]

---

##### `MsiResourceId`<sup>Required</sup> <a name="MsiResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```csharp
public string MsiResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterSecurityProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a>

---


### HdinsightHadoopClusterStorageAccountGen2OutputReference <a name="HdinsightHadoopClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterStorageAccountGen2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.filesystemIdInput">FilesystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">ManagedIdentityResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">StorageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.filesystemId">FilesystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesystemIdInput`<sup>Optional</sup> <a name="FilesystemIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```csharp
public string FilesystemIdInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `ManagedIdentityResourceIdInput`<sup>Optional</sup> <a name="ManagedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```csharp
public string ManagedIdentityResourceIdInput { get; }
```

- *Type:* string

---

##### `StorageResourceIdInput`<sup>Optional</sup> <a name="StorageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```csharp
public string StorageResourceIdInput { get; }
```

- *Type:* string

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```csharp
public string FilesystemId { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```csharp
public string ManagedIdentityResourceId { get; }
```

- *Type:* string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```csharp
public HdinsightHadoopClusterStorageAccountGen2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a>

---


### HdinsightHadoopClusterStorageAccountList <a name="HdinsightHadoopClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterStorageAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.get"></a>

```csharp
private HdinsightHadoopClusterStorageAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterStorageAccountOutputReference <a name="HdinsightHadoopClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resetStorageResourceId">ResetStorageResourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageResourceId` <a name="ResetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```csharp
private void ResetStorageResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageResourceIdInput">StorageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```csharp
public string StorageAccountKeyInput { get; }
```

- *Type:* string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```csharp
public string StorageContainerIdInput { get; }
```

- *Type:* string

---

##### `StorageResourceIdInput`<sup>Optional</sup> <a name="StorageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```csharp
public string StorageResourceIdInput { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; }
```

- *Type:* string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; }
```

- *Type:* string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightHadoopClusterTimeoutsOutputReference <a name="HdinsightHadoopClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightHadoopClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



