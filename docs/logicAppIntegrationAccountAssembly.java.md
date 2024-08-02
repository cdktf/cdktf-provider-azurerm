# `logicAppIntegrationAccountAssembly` Submodule <a name="`logicAppIntegrationAccountAssembly` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountAssembly <a name="LogicAppIntegrationAccountAssembly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly azurerm_logic_app_integration_account_assembly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_integration_account_assembly.LogicAppIntegrationAccountAssembly;

LogicAppIntegrationAccountAssembly.Builder.create(Construct scope, java.lang.String id)
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
    .assemblyName(java.lang.String)
    .integrationAccountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .assemblyVersion(java.lang.String)
//  .content(java.lang.String)
//  .contentLinkUri(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LogicAppIntegrationAccountAssemblyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.assemblyName">assemblyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.integrationAccountName">integrationAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#name LogicAppIntegrationAccountAssembly#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.assemblyVersion">assemblyVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#content LogicAppIntegrationAccountAssembly#content}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.contentLinkUri">contentLinkUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#id LogicAppIntegrationAccountAssembly#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#metadata LogicAppIntegrationAccountAssembly#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assemblyName`<sup>Required</sup> <a name="assemblyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.assemblyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}.

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.integrationAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#name LogicAppIntegrationAccountAssembly#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}.

---

##### `assemblyVersion`<sup>Optional</sup> <a name="assemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.assemblyVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#content LogicAppIntegrationAccountAssembly#content}.

---

##### `contentLinkUri`<sup>Optional</sup> <a name="contentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.contentLinkUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#id LogicAppIntegrationAccountAssembly#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#metadata LogicAppIntegrationAccountAssembly#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#timeouts LogicAppIntegrationAccountAssembly#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetAssemblyVersion">resetAssemblyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContentLinkUri">resetContentLinkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts"></a>

```java
public void putTimeouts(LogicAppIntegrationAccountAssemblyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

---

##### `resetAssemblyVersion` <a name="resetAssemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetAssemblyVersion"></a>

```java
public void resetAssemblyVersion()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentLinkUri` <a name="resetContentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContentLinkUri"></a>

```java
public void resetContentLinkUri()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppIntegrationAccountAssembly resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_integration_account_assembly.LogicAppIntegrationAccountAssembly;

LogicAppIntegrationAccountAssembly.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_integration_account_assembly.LogicAppIntegrationAccountAssembly;

LogicAppIntegrationAccountAssembly.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_integration_account_assembly.LogicAppIntegrationAccountAssembly;

LogicAppIntegrationAccountAssembly.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_integration_account_assembly.LogicAppIntegrationAccountAssembly;

LogicAppIntegrationAccountAssembly.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogicAppIntegrationAccountAssembly.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogicAppIntegrationAccountAssembly resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogicAppIntegrationAccountAssembly to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogicAppIntegrationAccountAssembly that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppIntegrationAccountAssembly to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference">LogicAppIntegrationAccountAssemblyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyNameInput">assemblyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersionInput">assemblyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUriInput">contentLinkUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountNameInput">integrationAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyName">assemblyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersion">assemblyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUri">contentLinkUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountName">integrationAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeouts"></a>

```java
public LogicAppIntegrationAccountAssemblyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference">LogicAppIntegrationAccountAssemblyTimeoutsOutputReference</a>

---

##### `assemblyNameInput`<sup>Optional</sup> <a name="assemblyNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyNameInput"></a>

```java
public java.lang.String getAssemblyNameInput();
```

- *Type:* java.lang.String

---

##### `assemblyVersionInput`<sup>Optional</sup> <a name="assemblyVersionInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersionInput"></a>

```java
public java.lang.String getAssemblyVersionInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentLinkUriInput`<sup>Optional</sup> <a name="contentLinkUriInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUriInput"></a>

```java
public java.lang.String getContentLinkUriInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationAccountNameInput`<sup>Optional</sup> <a name="integrationAccountNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountNameInput"></a>

```java
public java.lang.String getIntegrationAccountNameInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

---

##### `assemblyName`<sup>Required</sup> <a name="assemblyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyName"></a>

```java
public java.lang.String getAssemblyName();
```

- *Type:* java.lang.String

---

##### `assemblyVersion`<sup>Required</sup> <a name="assemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersion"></a>

```java
public java.lang.String getAssemblyVersion();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentLinkUri`<sup>Required</sup> <a name="contentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUri"></a>

```java
public java.lang.String getContentLinkUri();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountName"></a>

```java
public java.lang.String getIntegrationAccountName();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountAssemblyConfig <a name="LogicAppIntegrationAccountAssemblyConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_integration_account_assembly.LogicAppIntegrationAccountAssemblyConfig;

LogicAppIntegrationAccountAssemblyConfig.builder()
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
    .assemblyName(java.lang.String)
    .integrationAccountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .assemblyVersion(java.lang.String)
//  .content(java.lang.String)
//  .contentLinkUri(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LogicAppIntegrationAccountAssemblyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyName">assemblyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.integrationAccountName">integrationAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#name LogicAppIntegrationAccountAssembly#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyVersion">assemblyVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#content LogicAppIntegrationAccountAssembly#content}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.contentLinkUri">contentLinkUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#id LogicAppIntegrationAccountAssembly#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#metadata LogicAppIntegrationAccountAssembly#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assemblyName`<sup>Required</sup> <a name="assemblyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyName"></a>

```java
public java.lang.String getAssemblyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}.

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.integrationAccountName"></a>

```java
public java.lang.String getIntegrationAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#name LogicAppIntegrationAccountAssembly#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}.

---

##### `assemblyVersion`<sup>Optional</sup> <a name="assemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyVersion"></a>

```java
public java.lang.String getAssemblyVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#content LogicAppIntegrationAccountAssembly#content}.

---

##### `contentLinkUri`<sup>Optional</sup> <a name="contentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.contentLinkUri"></a>

```java
public java.lang.String getContentLinkUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#id LogicAppIntegrationAccountAssembly#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#metadata LogicAppIntegrationAccountAssembly#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.timeouts"></a>

```java
public LogicAppIntegrationAccountAssemblyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#timeouts LogicAppIntegrationAccountAssembly#timeouts}

---

### LogicAppIntegrationAccountAssemblyTimeouts <a name="LogicAppIntegrationAccountAssemblyTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_integration_account_assembly.LogicAppIntegrationAccountAssemblyTimeouts;

LogicAppIntegrationAccountAssemblyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#create LogicAppIntegrationAccountAssembly#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#delete LogicAppIntegrationAccountAssembly#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#read LogicAppIntegrationAccountAssembly#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#update LogicAppIntegrationAccountAssembly#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#create LogicAppIntegrationAccountAssembly#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#delete LogicAppIntegrationAccountAssembly#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#read LogicAppIntegrationAccountAssembly#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/logic_app_integration_account_assembly#update LogicAppIntegrationAccountAssembly#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountAssemblyTimeoutsOutputReference <a name="LogicAppIntegrationAccountAssemblyTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_integration_account_assembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference;

new LogicAppIntegrationAccountAssemblyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

---



