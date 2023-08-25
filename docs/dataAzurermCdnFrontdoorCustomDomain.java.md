# `data_azurerm_cdn_frontdoor_custom_domain`

Refer to the Terraform Registory for docs: [`data_azurerm_cdn_frontdoor_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain).

# `dataAzurermCdnFrontdoorCustomDomain` Submodule <a name="`dataAzurermCdnFrontdoorCustomDomain` Submodule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorCustomDomain <a name="DataAzurermCdnFrontdoorCustomDomain" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain azurerm_cdn_frontdoor_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomain;

DataAzurermCdnFrontdoorCustomDomain.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermCdnFrontdoorCustomDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#name DataAzurermCdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#profile_name DataAzurermCdnFrontdoorCustomDomain#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#resource_group_name DataAzurermCdnFrontdoorCustomDomain#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#id DataAzurermCdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#name DataAzurermCdnFrontdoorCustomDomain#name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#profile_name DataAzurermCdnFrontdoorCustomDomain#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#resource_group_name DataAzurermCdnFrontdoorCustomDomain#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#id DataAzurermCdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#timeouts DataAzurermCdnFrontdoorCustomDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermCdnFrontdoorCustomDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomain;

DataAzurermCdnFrontdoorCustomDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomain;

DataAzurermCdnFrontdoorCustomDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomain;

DataAzurermCdnFrontdoorCustomDomain.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.dnsZoneId">dnsZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference">DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList">DataAzurermCdnFrontdoorCustomDomainTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.validationToken">validationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

---

##### `dnsZoneId`<sup>Required</sup> <a name="dnsZoneId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.dnsZoneId"></a>

```java
public java.lang.String getDnsZoneId();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.timeouts"></a>

```java
public DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference">DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.tls"></a>

```java
public DataAzurermCdnFrontdoorCustomDomainTlsList getTls();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList">DataAzurermCdnFrontdoorCustomDomainTlsList</a>

---

##### `validationToken`<sup>Required</sup> <a name="validationToken" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.validationToken"></a>

```java
public java.lang.String getValidationToken();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorCustomDomainConfig <a name="DataAzurermCdnFrontdoorCustomDomainConfig" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomainConfig;

DataAzurermCdnFrontdoorCustomDomainConfig.builder()
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
//  .timeouts(DataAzurermCdnFrontdoorCustomDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#name DataAzurermCdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#profile_name DataAzurermCdnFrontdoorCustomDomain#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#resource_group_name DataAzurermCdnFrontdoorCustomDomain#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#id DataAzurermCdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#name DataAzurermCdnFrontdoorCustomDomain#name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#profile_name DataAzurermCdnFrontdoorCustomDomain#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#resource_group_name DataAzurermCdnFrontdoorCustomDomain#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#id DataAzurermCdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.timeouts"></a>

```java
public DataAzurermCdnFrontdoorCustomDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#timeouts DataAzurermCdnFrontdoorCustomDomain#timeouts}

---

### DataAzurermCdnFrontdoorCustomDomainTimeouts <a name="DataAzurermCdnFrontdoorCustomDomainTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomainTimeouts;

DataAzurermCdnFrontdoorCustomDomainTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#read DataAzurermCdnFrontdoorCustomDomain#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/cdn_frontdoor_custom_domain#read DataAzurermCdnFrontdoorCustomDomain#read}.

---

### DataAzurermCdnFrontdoorCustomDomainTls <a name="DataAzurermCdnFrontdoorCustomDomainTls" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomainTls;

DataAzurermCdnFrontdoorCustomDomainTls.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference;

new DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

---


### DataAzurermCdnFrontdoorCustomDomainTlsList <a name="DataAzurermCdnFrontdoorCustomDomainTlsList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomainTlsList;

new DataAzurermCdnFrontdoorCustomDomainTlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.get"></a>

```java
public DataAzurermCdnFrontdoorCustomDomainTlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermCdnFrontdoorCustomDomainTlsOutputReference <a name="DataAzurermCdnFrontdoorCustomDomainTlsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_cdn_frontdoor_custom_domain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference;

new DataAzurermCdnFrontdoorCustomDomainTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId">cdnFrontdoorSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls">DataAzurermCdnFrontdoorCustomDomainTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorSecretId`<sup>Required</sup> <a name="cdnFrontdoorSecretId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId"></a>

```java
public java.lang.String getCdnFrontdoorSecretId();
```

- *Type:* java.lang.String

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.internalValue"></a>

```java
public DataAzurermCdnFrontdoorCustomDomainTls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls">DataAzurermCdnFrontdoorCustomDomainTls</a>

---



