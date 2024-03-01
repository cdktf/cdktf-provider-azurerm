# `dataAzurermCdnFrontdoorRuleSet` Submodule <a name="`dataAzurermCdnFrontdoorRuleSet` Submodule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorRuleSet <a name="DataAzurermCdnFrontdoorRuleSet" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set azurerm_cdn_frontdoor_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_rule_set.DataAzurermCdnFrontdoorRuleSet;

DataAzurermCdnFrontdoorRuleSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .profileName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermCdnFrontdoorRuleSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#name DataAzurermCdnFrontdoorRuleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#profile_name DataAzurermCdnFrontdoorRuleSet#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#resource_group_name DataAzurermCdnFrontdoorRuleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#id DataAzurermCdnFrontdoorRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#name DataAzurermCdnFrontdoorRuleSet#name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#profile_name DataAzurermCdnFrontdoorRuleSet#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#resource_group_name DataAzurermCdnFrontdoorRuleSet#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#id DataAzurermCdnFrontdoorRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#timeouts DataAzurermCdnFrontdoorRuleSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermCdnFrontdoorRuleSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermCdnFrontdoorRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_rule_set.DataAzurermCdnFrontdoorRuleSet;

DataAzurermCdnFrontdoorRuleSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_rule_set.DataAzurermCdnFrontdoorRuleSet;

DataAzurermCdnFrontdoorRuleSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_rule_set.DataAzurermCdnFrontdoorRuleSet;

DataAzurermCdnFrontdoorRuleSet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_rule_set.DataAzurermCdnFrontdoorRuleSet;

DataAzurermCdnFrontdoorRuleSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermCdnFrontdoorRuleSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermCdnFrontdoorRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermCdnFrontdoorRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermCdnFrontdoorRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCdnFrontdoorRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference">DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.timeouts"></a>

```java
public DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference">DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorRuleSetConfig <a name="DataAzurermCdnFrontdoorRuleSetConfig" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_rule_set.DataAzurermCdnFrontdoorRuleSetConfig;

DataAzurermCdnFrontdoorRuleSetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .profileName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermCdnFrontdoorRuleSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#name DataAzurermCdnFrontdoorRuleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#profile_name DataAzurermCdnFrontdoorRuleSet#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#resource_group_name DataAzurermCdnFrontdoorRuleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#id DataAzurermCdnFrontdoorRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#name DataAzurermCdnFrontdoorRuleSet#name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#profile_name DataAzurermCdnFrontdoorRuleSet#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#resource_group_name DataAzurermCdnFrontdoorRuleSet#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#id DataAzurermCdnFrontdoorRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetConfig.property.timeouts"></a>

```java
public DataAzurermCdnFrontdoorRuleSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#timeouts DataAzurermCdnFrontdoorRuleSet#timeouts}

---

### DataAzurermCdnFrontdoorRuleSetTimeouts <a name="DataAzurermCdnFrontdoorRuleSetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_rule_set.DataAzurermCdnFrontdoorRuleSetTimeouts;

DataAzurermCdnFrontdoorRuleSetTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#read DataAzurermCdnFrontdoorRuleSet#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/cdn_frontdoor_rule_set#read DataAzurermCdnFrontdoorRuleSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_rule_set.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference;

new DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorRuleSet.DataAzurermCdnFrontdoorRuleSetTimeouts">DataAzurermCdnFrontdoorRuleSetTimeouts</a>

---



