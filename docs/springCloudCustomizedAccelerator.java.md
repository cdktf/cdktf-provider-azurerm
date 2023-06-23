# `azurerm_spring_cloud_customized_accelerator`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_customized_accelerator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator).

# `springCloudCustomizedAccelerator` Submodule <a name="`springCloudCustomizedAccelerator` Submodule" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudCustomizedAccelerator <a name="SpringCloudCustomizedAccelerator" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator azurerm_spring_cloud_customized_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAccelerator;

SpringCloudCustomizedAccelerator.Builder.create(Construct scope, java.lang.String id)
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
    .gitRepository(SpringCloudCustomizedAcceleratorGitRepository)
    .name(java.lang.String)
    .springCloudAcceleratorId(java.lang.String)
//  .acceleratorTags(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .iconUrl(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SpringCloudCustomizedAcceleratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.springCloudAcceleratorId">springCloudAcceleratorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.acceleratorTags">acceleratorTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.gitRepository"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#git_repository SpringCloudCustomizedAccelerator#git_repository}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}.

---

##### `springCloudAcceleratorId`<sup>Required</sup> <a name="springCloudAcceleratorId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.springCloudAcceleratorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}.

---

##### `acceleratorTags`<sup>Optional</sup> <a name="acceleratorTags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.acceleratorTags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.iconUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#timeouts SpringCloudCustomizedAccelerator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetAcceleratorTags">resetAcceleratorTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGitRepository` <a name="putGitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository"></a>

```java
public void putGitRepository(SpringCloudCustomizedAcceleratorGitRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudCustomizedAcceleratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

---

##### `resetAcceleratorTags` <a name="resetAcceleratorTags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetAcceleratorTags"></a>

```java
public void resetAcceleratorTags()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetIconUrl` <a name="resetIconUrl" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetIconUrl"></a>

```java
public void resetIconUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAccelerator;

SpringCloudCustomizedAccelerator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAccelerator;

SpringCloudCustomizedAccelerator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAccelerator;

SpringCloudCustomizedAccelerator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference">SpringCloudCustomizedAcceleratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTagsInput">acceleratorTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrlInput">iconUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorIdInput">springCloudAcceleratorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTags">acceleratorTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorId">springCloudAcceleratorId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepository"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositoryOutputReference getGitRepository();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeouts"></a>

```java
public SpringCloudCustomizedAcceleratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference">SpringCloudCustomizedAcceleratorTimeoutsOutputReference</a>

---

##### `acceleratorTagsInput`<sup>Optional</sup> <a name="acceleratorTagsInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTagsInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepositoryInput"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepository getGitRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrlInput"></a>

```java
public java.lang.String getIconUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `springCloudAcceleratorIdInput`<sup>Optional</sup> <a name="springCloudAcceleratorIdInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorIdInput"></a>

```java
public java.lang.String getSpringCloudAcceleratorIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

---

##### `acceleratorTags`<sup>Required</sup> <a name="acceleratorTags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTags"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `springCloudAcceleratorId`<sup>Required</sup> <a name="springCloudAcceleratorId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorId"></a>

```java
public java.lang.String getSpringCloudAcceleratorId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudCustomizedAcceleratorConfig <a name="SpringCloudCustomizedAcceleratorConfig" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorConfig;

SpringCloudCustomizedAcceleratorConfig.builder()
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
    .gitRepository(SpringCloudCustomizedAcceleratorGitRepository)
    .name(java.lang.String)
    .springCloudAcceleratorId(java.lang.String)
//  .acceleratorTags(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .iconUrl(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SpringCloudCustomizedAcceleratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.springCloudAcceleratorId">springCloudAcceleratorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.acceleratorTags">acceleratorTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.gitRepository"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepository getGitRepository();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#git_repository SpringCloudCustomizedAccelerator#git_repository}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}.

---

##### `springCloudAcceleratorId`<sup>Required</sup> <a name="springCloudAcceleratorId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.springCloudAcceleratorId"></a>

```java
public java.lang.String getSpringCloudAcceleratorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}.

---

##### `acceleratorTags`<sup>Optional</sup> <a name="acceleratorTags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.acceleratorTags"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.timeouts"></a>

```java
public SpringCloudCustomizedAcceleratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#timeouts SpringCloudCustomizedAccelerator#timeouts}

---

### SpringCloudCustomizedAcceleratorGitRepository <a name="SpringCloudCustomizedAcceleratorGitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorGitRepository;

SpringCloudCustomizedAcceleratorGitRepository.builder()
    .url(java.lang.String)
//  .basicAuth(SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth)
//  .branch(java.lang.String)
//  .caCertificateId(java.lang.String)
//  .commit(java.lang.String)
//  .gitTag(java.lang.String)
//  .intervalInSeconds(java.lang.Number)
//  .sshAuth(SpringCloudCustomizedAcceleratorGitRepositorySshAuth)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#url SpringCloudCustomizedAccelerator#url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#branch SpringCloudCustomizedAccelerator#branch}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.caCertificateId">caCertificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#ca_certificate_id SpringCloudCustomizedAccelerator#ca_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.commit">commit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#commit SpringCloudCustomizedAccelerator#commit}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.gitTag">gitTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#git_tag SpringCloudCustomizedAccelerator#git_tag}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#interval_in_seconds SpringCloudCustomizedAccelerator#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | ssh_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#url SpringCloudCustomizedAccelerator#url}.

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.basicAuth"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth getBasicAuth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#basic_auth SpringCloudCustomizedAccelerator#basic_auth}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#branch SpringCloudCustomizedAccelerator#branch}.

---

##### `caCertificateId`<sup>Optional</sup> <a name="caCertificateId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.caCertificateId"></a>

```java
public java.lang.String getCaCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#ca_certificate_id SpringCloudCustomizedAccelerator#ca_certificate_id}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#commit SpringCloudCustomizedAccelerator#commit}.

---

##### `gitTag`<sup>Optional</sup> <a name="gitTag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.gitTag"></a>

```java
public java.lang.String getGitTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#git_tag SpringCloudCustomizedAccelerator#git_tag}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#interval_in_seconds SpringCloudCustomizedAccelerator#interval_in_seconds}.

---

##### `sshAuth`<sup>Optional</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.sshAuth"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositorySshAuth getSshAuth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#ssh_auth SpringCloudCustomizedAccelerator#ssh_auth}

---

### SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth <a name="SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth;

SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#password SpringCloudCustomizedAccelerator#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#username SpringCloudCustomizedAccelerator#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#password SpringCloudCustomizedAccelerator#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#username SpringCloudCustomizedAccelerator#username}.

---

### SpringCloudCustomizedAcceleratorGitRepositorySshAuth <a name="SpringCloudCustomizedAcceleratorGitRepositorySshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth;

SpringCloudCustomizedAcceleratorGitRepositorySshAuth.builder()
    .privateKey(java.lang.String)
//  .hostKey(java.lang.String)
//  .hostKeyAlgorithm(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#private_key SpringCloudCustomizedAccelerator#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKey">hostKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#host_key SpringCloudCustomizedAccelerator#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#host_key_algorithm SpringCloudCustomizedAccelerator#host_key_algorithm}. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#private_key SpringCloudCustomizedAccelerator#private_key}.

---

##### `hostKey`<sup>Optional</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKey"></a>

```java
public java.lang.String getHostKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#host_key SpringCloudCustomizedAccelerator#host_key}.

---

##### `hostKeyAlgorithm`<sup>Optional</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKeyAlgorithm"></a>

```java
public java.lang.String getHostKeyAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#host_key_algorithm SpringCloudCustomizedAccelerator#host_key_algorithm}.

---

### SpringCloudCustomizedAcceleratorTimeouts <a name="SpringCloudCustomizedAcceleratorTimeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorTimeouts;

SpringCloudCustomizedAcceleratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#create SpringCloudCustomizedAccelerator#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#delete SpringCloudCustomizedAccelerator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#read SpringCloudCustomizedAccelerator#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#update SpringCloudCustomizedAccelerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#create SpringCloudCustomizedAccelerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#delete SpringCloudCustomizedAccelerator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#read SpringCloudCustomizedAccelerator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/spring_cloud_customized_accelerator#update SpringCloudCustomizedAccelerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference;

new SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.internalValue"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

---


### SpringCloudCustomizedAcceleratorGitRepositoryOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference;

new SpringCloudCustomizedAcceleratorGitRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth">putSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCaCertificateId">resetCaCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetGitTag">resetGitTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetSshAuth">resetSshAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth"></a>

```java
public void putBasicAuth(SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

---

##### `putSshAuth` <a name="putSshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth"></a>

```java
public void putSshAuth(SpringCloudCustomizedAcceleratorGitRepositorySshAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBasicAuth"></a>

```java
public void resetBasicAuth()
```

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetCaCertificateId` <a name="resetCaCertificateId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCaCertificateId"></a>

```java
public void resetCaCertificateId()
```

##### `resetCommit` <a name="resetCommit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCommit"></a>

```java
public void resetCommit()
```

##### `resetGitTag` <a name="resetGitTag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetGitTag"></a>

```java
public void resetGitTag()
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetIntervalInSeconds"></a>

```java
public void resetIntervalInSeconds()
```

##### `resetSshAuth` <a name="resetSshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetSshAuth"></a>

```java
public void resetSshAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateIdInput">caCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTagInput">gitTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuthInput">sshAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateId">caCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTag">gitTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuth"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference getBasicAuth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference</a>

---

##### `sshAuth`<sup>Required</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuth"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference getSshAuth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuthInput"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth getBasicAuthInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `caCertificateIdInput`<sup>Optional</sup> <a name="caCertificateIdInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateIdInput"></a>

```java
public java.lang.String getCaCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `gitTagInput`<sup>Optional</sup> <a name="gitTagInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTagInput"></a>

```java
public java.lang.String getGitTagInput();
```

- *Type:* java.lang.String

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSecondsInput"></a>

```java
public java.lang.Number getIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `sshAuthInput`<sup>Optional</sup> <a name="sshAuthInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuthInput"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositorySshAuth getSshAuthInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `caCertificateId`<sup>Required</sup> <a name="caCertificateId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateId"></a>

```java
public java.lang.String getCaCertificateId();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `gitTag`<sup>Required</sup> <a name="gitTag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTag"></a>

```java
public java.lang.String getGitTag();
```

- *Type:* java.lang.String

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.internalValue"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

---


### SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference;

new SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKey">resetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKeyAlgorithm">resetHostKeyAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostKey` <a name="resetHostKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKey"></a>

```java
public void resetHostKey()
```

##### `resetHostKeyAlgorithm` <a name="resetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKeyAlgorithm"></a>

```java
public void resetHostKeyAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput">hostKeyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyInput">hostKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKey">hostKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostKeyAlgorithmInput`<sup>Optional</sup> <a name="hostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```java
public java.lang.String getHostKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `hostKeyInput`<sup>Optional</sup> <a name="hostKeyInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyInput"></a>

```java
public java.lang.String getHostKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKey"></a>

```java
public java.lang.String getHostKey();
```

- *Type:* java.lang.String

---

##### `hostKeyAlgorithm`<sup>Required</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithm"></a>

```java
public java.lang.String getHostKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.internalValue"></a>

```java
public SpringCloudCustomizedAcceleratorGitRepositorySshAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

---


### SpringCloudCustomizedAcceleratorTimeoutsOutputReference <a name="SpringCloudCustomizedAcceleratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_customized_accelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference;

new SpringCloudCustomizedAcceleratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

---



